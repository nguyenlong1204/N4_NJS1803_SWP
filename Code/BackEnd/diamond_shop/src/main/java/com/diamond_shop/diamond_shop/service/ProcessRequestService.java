package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ReceivePendingRequestDTO;
import com.diamond_shop.diamond_shop.dto.UpdateProcessRequestDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import org.springframework.data.domain.Page;


public interface ProcessRequestService {
    int totalDone();
    Page<ProcessRequestEntity> viewAllProcessRequests(int page);
    Page<ProcessRequestEntity> viewProcessRequestsByConsultingStaffId(int page, int consultingStaff);
    Page<ProcessRequestEntity> viewProcessRequestsByCustomerId(int page, int customerId);
    String createProcessRequest(ReceivePendingRequestDTO receivePendingRequestDTO);
    String updateProcessRequest(int id, UpdateProcessRequestDTO updateProcessRequestDTO);
}
