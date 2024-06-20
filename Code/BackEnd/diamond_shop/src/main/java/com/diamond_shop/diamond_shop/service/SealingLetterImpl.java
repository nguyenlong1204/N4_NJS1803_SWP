package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class SealingLetterImpl implements SealingLetterService {

    @Autowired
    SealingLetterRepository sealingLetterRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    ValuationRequestRepository valuationRequestRepository;

    @Autowired
    ProcessRequestRepository processRequestRepository;

    @Autowired
    ProcessSealingService processSealingService;

    @Override
    public Page<SealingLetterEntity> getAllSealingLetters(int page) {
        int pageNumber = --page, pageSize = 5;
        return sealingLetterRepository.findAll(PageRequest.of(pageNumber, pageSize));
    }

    @Override
    public String createSealingLetter(int valuationRequestId) {
        ValuationRequestEntity valuationRequest = valuationRequestRepository.findById(valuationRequestId);
        SealingLetterEntity sealingLetter = new SealingLetterEntity(new Date(), "", valuationRequest);
        sealingLetterRepository.save(sealingLetter);
        processSealingService.createProcessSealing(sealingLetter);
        return "Create sealing letter successfully";
    }

    @Override
    public String checkSealingDate(int valuationRequestId) {
        ValuationRequestEntity valuationRequest = valuationRequestRepository.findById(valuationRequestId);
        if (valuationRequest == null)
            return "Not found valuation request";
        Date currentDate = new Date();
        if (currentDate.after(valuationRequest.getSealingDate())) {
            ProcessRequestEntity processRequest = processRequestRepository.findByValuationRequestId(valuationRequestId);
            if (!processRequest.getName().equals("Overdue")) {
                processRequest.setName("Overdue");
                processRequestRepository.save(processRequest);
                createSealingLetter(valuationRequestId);
                return "Create sealing letter";
            } else return "Already created sealing letter";
        } else return "Sealing date not overdue";
    }
}
