package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.*;
import com.diamond_shop.diamond_shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
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
        //
//        int i = 0;
//        List<ProcessRequestEntity> processRequestEntities = processRequestRepository.findAll();
//        for (ProcessRequestEntity processRequestEntity : processRequestEntities) {
//            if ("Done".equals(processRequestEntity.getName())) {
//                AccountEntity valuationStaff = accountEntities.get(i % accountEntities.size());
//                ValuationResultEntity valuationResultEntity = valuationResultRepository.findByValuationRequestId(requestId);
//
//                Optional<ProcessResultEntity> existingResultOpt = processResultRepository.findByProcessRequestId(processRequestEntity.getId());
//                ProcessResultEntity processResultEntity;
//                if (existingResultOpt.isPresent()) {
//                    processResultEntity = existingResultOpt.get();
//                    processResultEntity.setValuationStaffId(valuationStaff);
//                    processResultEntity.setValuationResultId(valuationResultEntity);
//                    processResultEntity.setName("Not resolved yet");
//                } else {
//                    processResultEntity = new ProcessResultEntity(
//                            valuationStaff,
//                            valuationResultEntity,
//                            processRequestEntity,
//                            "Not resolved yet"
//                    );
//                }
//                processRequestEntity.setProcessResult(processResultEntity);
//                processRequestRepository.save(processRequestEntity); // save the process request which will also save the process result due to cascading
//                i++;
//            }
//        }
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
 