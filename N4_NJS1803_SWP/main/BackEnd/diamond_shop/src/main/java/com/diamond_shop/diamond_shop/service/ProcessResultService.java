package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;

public interface ProcessResultService {
    String processResult(ProcessRequestEntity requestId);

    void valuateDiamondProduct();
}
