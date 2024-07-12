package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.*;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.ProcessResultRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProcessResultImpl implements ProcessResultService {

    private final ProcessResultRepository processResultRepository;
    private final RoleRepository roleRepository;
    private final AccountRepository accountRepository;
    private final ValuationResultRepository valuationResultRepository;

    @Override
    public Page<ProcessResultEntity> getAllByValuationStaffId(int page, int valuationStaffId) {
        int pageSize = 5, pageNumber = --page;
        return processResultRepository.findAllByValuationStaffId(PageRequest.of(pageNumber, pageSize), valuationStaffId);
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
        ValuationResultEntity valuationResult = valuationResultRepository.findByValuationRequestId(p.getPendingRequestId().getValuationRequestEntity().getId());
        ProcessResultEntity processResult = new ProcessResultEntity(
                leastOccupiedValuationStaff,
                valuationResult,
                "Not resolved yet");
        processResultRepository.save(processResult);
        return "Task assigned successfully!";
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
 