package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ValuatedDiamondEntity;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface ValuatedDiamondService {
    Page<ValuatedDiamondEntity> getAllValuatedDiamonds();

    Optional<ValuatedDiamondEntity> getValuatedDiamondById(String id);

   Optional<ValuatedDiamondEntity> getValuatedDiamondByValuationRequestId(int id);

    String createValuatedDiamond(int valuationResultId);
    boolean checkValuatedDiamond(String id);
}
