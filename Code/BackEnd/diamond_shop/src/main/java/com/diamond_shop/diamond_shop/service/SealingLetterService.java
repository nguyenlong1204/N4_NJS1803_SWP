package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SealingLetterService {
    Page<SealingLetterEntity> getAllSealingLetters(int page);
    String createSealingLetter(int valuationRequestId);
    String checkSealingDate(int valuationRequestId);
}
