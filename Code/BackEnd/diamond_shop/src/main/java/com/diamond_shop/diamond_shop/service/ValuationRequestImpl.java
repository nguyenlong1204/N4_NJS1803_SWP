package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.dto.ViewRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;

@Service
public class ValuationRequestImpl implements ValuationRequestService {
    @Autowired
    private ValuationRequestRepository valuationRequestRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    ProcessRequestRepository processRequestRepository;

    @Autowired
    ProcessResultRepository processResultRepository;

    @Override
    public int makeRequest(ValuationRequestDTO valuationRequestDTO) {

        AccountEntity acc = accountRepository.findByUserName(valuationRequestDTO.getUsername());
        ServiceEntity service = serviceRepository.findById(valuationRequestDTO.getServiceId()).orElse(null);

        if (acc == null)
            return -1;
        else if (service == null)
            return -1;

        Date createdDate = valuationRequestDTO.getCreatedDate() != null ? valuationRequestDTO.getCreatedDate() : new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(createdDate);
        calendar.add(Calendar.DAY_OF_MONTH, Integer.parseInt(service.getTime()));
        Date finishedDate = calendar.getTime();
        calendar.add(Calendar.DAY_OF_MONTH, 1);
        Date sealingDate = calendar.getTime();
        ValuationRequestEntity valuationRequestEntity = new ValuationRequestEntity(
//                valuationRequestDTO.getRequestId(),
                acc,
                service,
                createdDate,
                finishedDate,
                sealingDate,
                valuationRequestDTO.getDescription()
        );
        valuationRequestRepository.save(valuationRequestEntity);
        return valuationRequestEntity.getId();
    }

    @Override
    public Page<ValuationRequestEntity> viewRequest(String search, int pageId, String filter) {
        int pageSize = 5;
        int pageNumber = --pageId;
        if (search.isEmpty() && filter.isEmpty())
            return valuationRequestRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by("id")));
        else if (!search.isEmpty() && filter.isEmpty())
            return valuationRequestRepository.searchNonFilter(PageRequest.of(pageNumber, pageSize, Sort.by("id")), search);
        else {
            switch (filter) {
                case "customerName":
                    return valuationRequestRepository.searchCustomerName(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
                case "serviceName":
                    return valuationRequestRepository.searchServiceName(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
                case "description":
                    return valuationRequestRepository.searchDescription(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
            }
        }
        return null;
    }

    @Override
    public String checkFinishDate(int valuationRequestId) {
        ValuationRequestEntity valuationRequest = valuationRequestRepository.findById(valuationRequestId);
        if (valuationRequest == null)
            return "Not found valuation request";
        Date currentDate = new Date();
        if (currentDate.after(valuationRequest.getFinishDate())) {
            ProcessRequestEntity processRequest = processRequestRepository.findByValuationRequestId(valuationRequestId);
            if (!processRequest.getName().equals("Finished")) {
                processRequest.setName("Finished");
                processRequestRepository.save(processRequest);
                return "Finish request";
            } else return "Already finished request";
        } else return "Not finish";
    }

}   