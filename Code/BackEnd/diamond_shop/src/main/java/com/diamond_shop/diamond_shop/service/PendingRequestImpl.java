package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.PendingRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.PendingRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PendingRequestImpl implements PendingRequestService {
    private final PendingRepository pendingRepository;
    private final AccountRepository accountRepository;

    public PendingRequestImpl(PendingRepository pendingRepository, AccountRepository accountRepository) {
        this.pendingRepository = pendingRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public Page<PendingRequestsEntity> getAllPendingRequests(int page) {
        int pageSize = 5;
        int pageNumber = --page;
        return pendingRepository.findAllPendingRequests(PageRequest.of(pageNumber, pageSize));
    }

    @Override
    public Page<PendingRequestsEntity> getAllByCustomerId(int page, int customerId) {
        int pageSize = 5;
        int pageNumber = --page;
        return pendingRepository.findAllByCustomerId(PageRequest.of(pageNumber, pageSize), customerId);
    }

    @Override
    public int makePendingRequest(PendingRequestDTO pendingRequestDTO) {

        AccountEntity acc = accountRepository.findById(pendingRequestDTO.getCustomerId()).orElse(null);
        if (acc == null)
            return 0;
        Date createdDate = new Date();
        PendingRequestsEntity pendingRequestsEntity = new PendingRequestsEntity(
                acc,
                pendingRequestDTO.getDescription(),
                createdDate
        );
        pendingRepository.save(pendingRequestsEntity);
        return pendingRequestsEntity.getId();
    }

    @Override
    public String cancelPendingRequest(int pendingRequestId) {
        PendingRequestsEntity pendingRequest = pendingRepository.findById(pendingRequestId).orElse(null);
        if (pendingRequest == null)
            return "Cannot found pending request with id " + pendingRequestId;
        pendingRepository.delete(pendingRequest);
        return "Cancel successful";
    }

    @Override
    public String checkCustomerPendingRequest(int customerId) {
        List<PendingRequestsEntity> pendingRequests = pendingRepository.findByCustomerId(customerId);
        if (!pendingRequests.isEmpty())
            return "You has already made a request";
        return "";
    }
}
