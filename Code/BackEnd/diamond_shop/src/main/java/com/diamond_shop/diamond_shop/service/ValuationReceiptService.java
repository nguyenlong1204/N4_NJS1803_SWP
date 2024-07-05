package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ValuationReceiptEntity;

import java.util.Optional;

public interface ValuationReceiptService {
    String createReceipt(int valuationRequestId);

    Optional<ValuationReceiptEntity> findByValuationRequestId(int valuationRequestId);
}
