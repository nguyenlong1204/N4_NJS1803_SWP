package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.*;
import com.diamond_shop.diamond_shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProcessResultImpl implements ProcessResultService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ValuationRequestRepository valuationRequestRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ProcessRequestRepository processRequestRepository;

    @Autowired
    private ProcessResultRepository processResultRepository;

    @Autowired
    private ValuationResultRepository valuationResultRepository;


    @Override
    public Page<ProcessResultEntity> viewProcessResult(int valuationStaff) {
        return processResultRepository.findByStaffId(PageRequest.of(0, 5), valuationStaff);
    }

    @Override
    public String processResult(ProcessRequestEntity p) {
        RoleEntity roleEntity = roleRepository.findById(4).orElse(null);
        if (roleEntity == null) {
            return "Role with id 4 not found";
        }
        List<AccountEntity> accountEntities = accountRepository.findAllByRoleId(roleEntity);
        if (accountEntities.isEmpty())
            return "There is no valuation staff";


        AccountEntity leastOccupiedValuationStaff = getLeastOccupiedValuationStaff(accountEntities);
        ValuationResultEntity valuationResult = valuationResultRepository.findByValuationRequestId(p.getValuationRequestId().getId());
        ProcessRequestEntity processRequest = processRequestRepository.findByStaffIdAndValuationRequestId(p.getStaffId().getId(), p.getValuationRequestId().getId());
        ProcessResultEntity processResult = new ProcessResultEntity(
                leastOccupiedValuationStaff,
                valuationResult,
                processRequest,
                "Not resolved yet");
        processResultRepository.save(processResult);
        return "Task assigned successfully!";
    }

    @Override
    public void valuateDiamondProduct() {
        // TODO Auto-generated method stub

    }

    public AccountEntity getLeastOccupiedValuationStaff(List<AccountEntity> valuationStaff) {
        if (valuationStaff.isEmpty()) return null;

        long minOccupiedStaff = processResultRepository.countByStaffId(valuationStaff.get(0).getId());
        int choosenStaffId = 0;
        int i = 0;
        for (AccountEntity staff : valuationStaff) {
            long countStaffOccupied = processResultRepository.countByStaffId(staff.getId());
            if (minOccupiedStaff > countStaffOccupied) {
                minOccupiedStaff = countStaffOccupied;
                choosenStaffId = i;
            }
            i++;
        }
        return valuationStaff.get(choosenStaffId);
    }
}
 