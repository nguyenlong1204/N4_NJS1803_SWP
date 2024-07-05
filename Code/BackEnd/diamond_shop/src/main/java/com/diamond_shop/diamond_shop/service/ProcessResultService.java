package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import org.springframework.data.domain.Page;

public interface ProcessResultService {
    Page<ProcessResultEntity> getAllByValuationStaffId(int page, int valuationStaffId);
    String processResult(ProcessRequestEntity requestId);
}
