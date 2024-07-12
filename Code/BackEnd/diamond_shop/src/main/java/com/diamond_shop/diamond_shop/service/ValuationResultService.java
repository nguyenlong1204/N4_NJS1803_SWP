package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.CreateImageDTO;
import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.pojo.DetailDiamondPojo;
import com.diamond_shop.diamond_shop.pojo.DiamondPojo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ValuationResultService {

    int totalValuationResults();
    Page<ValuationResultEntity> getAllValuationResults(int page);
    Optional<ValuationResultEntity> getValuationResultById(String id);

    Page<ValuationResultEntity> getValuationResultsByCustomerId(int page, int customerId);

    Optional<ValuationResultEntity> getValuationResultByValuationRequestId(int valuationRequestId);

    String valuateDiamond(String id, ValuationResultDTO valuationResultDTO);

    String createValuationResult(ProcessRequestEntity processRequest);

    List<String> getValuationResultImage(String id);

    String createValuationResultImage(CreateImageDTO createImageDTO);

    String deleteValuationResultImage(String imageId);

    List<DiamondPojo> crawlNaturalDiamond(String shape);

    List<DiamondPojo> crawlLabGrownDiamond(String shape);

    List<DetailDiamondPojo> crawlDetailDiamond(String carat);
}
