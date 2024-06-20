package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import org.springframework.data.domain.Page;


public interface ProcessRequestService {
    Page<ProcessRequestEntity> viewProcessRequests(int page, int consultingStaff);

    String processRequest(int valuationRequest);

    String cancelRequest(int consultingStaffId, int valuationRequestId);

    ProcessRequestEntity updateRequest(String type, UpdateRequestDTO updateRequestDTO);
}   
