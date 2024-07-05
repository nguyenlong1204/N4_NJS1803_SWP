package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;

import java.util.Optional;


public interface ValuationRequestService {
    String makeRequest(int pendingId, int serviceId, int paymentId);

    Optional<ValuationRequestEntity> getValuationRequestByPendingRequestId(int pendingId);

    String checkFinishDateByProcessRequestId(int processRequestId);

    String checkSealedDateByProcessRequestId(int processRequestId);

}
