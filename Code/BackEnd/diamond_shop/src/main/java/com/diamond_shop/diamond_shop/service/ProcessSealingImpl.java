package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessSealingEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.ProcessSealingRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ProcessSealingImpl implements ProcessSealingService {
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    ProcessSealingRepository processSealingRepository;

    @Override
    public Page<ProcessSealingEntity> findAllProcessSealing(int page) {
        int pageSize = 5, pageNumber = --page;
        return processSealingRepository.findAll(PageRequest.of(pageNumber, pageSize));
    }

    @Override
    public String createProcessSealing(SealingLetterEntity sealingLetter) {
        RoleEntity role = roleRepository.findById(2).orElse(null);
        if (role == null)
            return "Role id with 2 not found";

        AccountEntity manager = accountRepository.findByRoleId(2);

        if (manager == null)
            return "No manager found";

        ProcessSealingEntity processSealing = new ProcessSealingEntity("Not resolved yet", manager, sealingLetter);
        processSealingRepository.save(processSealing);
        return "";
    }

    @Override
    public String acceptSealingLetter(ProcessSealingEntity processSealing) {
        processSealing.setStatus("Accepted");
        processSealingRepository.save(processSealing);
        return "Accepted";
    }

    @Override
    public String rejectSealingLetter(ProcessSealingEntity processSealing) {
        processSealing.setStatus("Rejected");
        processSealingRepository.save(processSealing);
        return "Rejected";
    }
}
