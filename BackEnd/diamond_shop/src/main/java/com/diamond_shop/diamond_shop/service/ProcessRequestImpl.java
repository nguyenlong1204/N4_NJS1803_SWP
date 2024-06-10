package com.diamond_shop.diamond_shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.ProcessRequestRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
@Service
public class ProcessRequestImpl implements ProcessRequestService{
    @Autowired
    private ProcessRequestRepository processRequestRepository;

    @Autowired
    private ValuationRequestRepository valuationRequestRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RoleRepository roleRepository;
    @Override
    public String processRequest() {
        RoleEntity roleEntity = roleRepository.findById(3).orElse(null);
        if (roleEntity == null) {
            return "Role with id 3 not found";
        }
        List<ValuationRequestEntity> valuationRequestEntity = valuationRequestRepository.findAll();
        List<AccountEntity> accountEntity = accountRepository.findAllByRoleId(roleEntity);

        if (!valuationRequestEntity.isEmpty() && !accountEntity.isEmpty()) {
            int i = 0;
            for (ValuationRequestEntity valuationRequest : valuationRequestEntity) {
                AccountEntity staffMember = accountEntity.get(i % accountEntity.size());
                Optional<ProcessRequestEntity> existingRequest = processRequestRepository.findByStaffIdAndValuationRequestId(staffMember.getId(), valuationRequest.getId());
                if (existingRequest.isEmpty()) {
                    ProcessRequestEntity processRequestEntity = new ProcessRequestEntity(
                        staffMember,
                        valuationRequest,
                        "False"
                    );
                    processRequestRepository.save(processRequestEntity);
                }
                    i++;
            }
            return "Task aggined successfully!";
        }
        return "No request available!";
    }
}
