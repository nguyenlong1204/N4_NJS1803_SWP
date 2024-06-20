package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProcessResultService {

    Page<ProcessResultEntity> viewProcessResult(int valuationStaff);

    String processResult(ProcessRequestEntity requestId);

    void valuateDiamondProduct();
}
