package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ProcessSealingEntity;
import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import org.springframework.data.domain.Page;

public interface ProcessSealingService {
    Page<ProcessSealingEntity> findAllProcessSealing(int page);
    String createProcessSealing(SealingLetterEntity sealingLetter);
    String acceptSealingLetter(ProcessSealingEntity processSealing);
    String rejectSealingLetter(ProcessSealingEntity processSealing);
}
