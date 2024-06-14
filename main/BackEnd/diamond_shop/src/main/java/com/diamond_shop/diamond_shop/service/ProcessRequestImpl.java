package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProcessRequestImpl implements ProcessRequestService {
    @Autowired
    private ProcessRequestRepository processRequestRepository;

    @Autowired
    private ValuationRequestRepository valuationRequestRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private ProcessResultRepository processResultRepository;

    @Override
    public Page<ProcessRequestEntity> viewProcessRequests(int consultingStaff) {
        return processRequestRepository.findCustomerByConsultingStaffId(PageRequest.of(0, 5), consultingStaff);
    }

    @Override
    public String processRequest(int valuationRequestId) {
        RoleEntity role = roleRepository.findById(3).orElse(null);
        if (role == null)
            return "Role with id 3 not found";

        List<ValuationRequestEntity> valuationRequestEntity = valuationRequestRepository.findAll();
        List<AccountEntity> accounts = accountRepository.findAllByRoleId(role);

        if (valuationRequestEntity.isEmpty() && accounts.isEmpty()) return "No request available";

        AccountEntity leastOccupiedConsultingStaff = getLeastOccupiedConsultingStaff(accounts);
        ValuationRequestEntity valuationRequest = valuationRequestRepository.findById(valuationRequestId);
        ProcessRequestEntity processRequest = new ProcessRequestEntity(leastOccupiedConsultingStaff, valuationRequest, "Not resolved yet");
        processRequestRepository.save(processRequest);
        return "Task assigned successfully!";
    }

    @Override
    public String cancelRequest(int consultingStaffId, int valuationRequestId) {
        RoleEntity role = roleRepository.findById(3).orElse(null);
        if (role == null)
            return "Role with id 3 not found";

        List<ValuationRequestEntity> valuationRequestEntity = valuationRequestRepository.findAll();
        List<AccountEntity> accounts = accountRepository.findExceptById(role.getId(), consultingStaffId);
        if (valuationRequestEntity.isEmpty() && accounts.isEmpty()) return "No request available";

        AccountEntity leastOccupiedConsultingStaff = getLeastOccupiedConsultingStaff(accounts);
        ValuationRequestEntity valuationRequest = valuationRequestRepository.findById(valuationRequestId);
        ProcessRequestEntity oldProcessRequest = processRequestRepository.findByStaffIdAndValuationRequestId(consultingStaffId, valuationRequestId);
        processRequestRepository.delete(oldProcessRequest);
        ProcessRequestEntity newProcessRequest = new ProcessRequestEntity(leastOccupiedConsultingStaff, valuationRequest, "Not resolve yet");
        processRequestRepository.save(newProcessRequest);
        return "Cancel assigned successfully!";
    }

    public AccountEntity getLeastOccupiedConsultingStaff(List<AccountEntity> consultingStaff) {
        if (consultingStaff.isEmpty()) return null;

        long minOccupiedStaff = processRequestRepository.countByStaffId(consultingStaff.get(0).getId());
        int choosenStaffId = 0;
        int i = 0;
        for (AccountEntity staff : consultingStaff) {
            long countStaffOccupied = processRequestRepository.countByStaffId(staff.getId());
            if (minOccupiedStaff > countStaffOccupied) {
                minOccupiedStaff = countStaffOccupied;
                choosenStaffId = i;
            }
            i++;
        }
        return consultingStaff.get(choosenStaffId);
    }

    @Override
    public ProcessRequestEntity updateRequest(UpdateRequestDTO updateRequestDTO) {
        ProcessRequestEntity process = processRequestRepository.findByStaffIdAndValuationRequestId(updateRequestDTO.getConsultingStaffId(), updateRequestDTO.getValuationRequestId());
        process.setName("Done");
        processRequestRepository.save(process);
        return process;
    }

}
