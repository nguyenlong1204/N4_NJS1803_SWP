package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.PendingRequestDTO;
import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import org.springframework.data.domain.Page;

public interface PendingRequestService {
    Page<PendingRequestsEntity> getAllPendingRequests(int page);

    Page<PendingRequestsEntity> getAllByCustomerId(int page, int customerId);

    int makePendingRequest(PendingRequestDTO pendingRequestDTO);

    String cancelPendingRequest(int pendingRequestId);

    String checkCustomerPendingRequest(int customerId);
}
