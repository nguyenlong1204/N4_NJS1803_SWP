package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;

public interface ValuationResultService {
    
    String valuateDiamond(ValuationResultDTO valuationResultDTO);
    String assignForValuationStaff(ProcessRequestEntity processRequest);
}
