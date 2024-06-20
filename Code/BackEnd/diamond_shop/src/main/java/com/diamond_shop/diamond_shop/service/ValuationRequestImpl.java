package com.diamond_shop.diamond_shop.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.ServiceRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;

@Service
public class ValuationRequestImpl implements ValuationRequestService {
    @Autowired
    private ValuationRequestRepository valuationRequestRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ServiceRepository serviceRepository;
    @Override
    public String makeRequest(ValuationRequestDTO valuationRequestDTO) {

        AccountEntity acc = accountRepository.findByUserName(valuationRequestDTO.getUsername());
        ServiceEntity service = serviceRepository.findById(valuationRequestDTO.getServiceId()).orElse(null);

        if (accountRepository.findByUserName(valuationRequestDTO.getUsername()) != null) {
            Date createdDate = valuationRequestDTO.getCreatedDate() != null ? valuationRequestDTO.getCreatedDate() : new Date();
            
            ValuationRequestEntity valuationRequestEntity = new ValuationRequestEntity(
                valuationRequestDTO.getRequestId(),
                acc,
                service,
                createdDate,
                valuationRequestDTO.getDescription()
            );
            valuationRequestRepository.save(valuationRequestEntity);
            return "Success";
        }
            
        return "User not found";
    }
}   