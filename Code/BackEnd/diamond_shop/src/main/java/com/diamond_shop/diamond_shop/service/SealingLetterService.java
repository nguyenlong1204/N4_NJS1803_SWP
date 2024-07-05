package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import org.springframework.data.domain.Page;

public interface SealingLetterService {

    Page<SealingLetterEntity> getAllSealingLetters(int page);

    Page<SealingLetterEntity> getAllSealingLettersByCustomerId(int page, int customerId);

    String createSealingLetter(int valuationRequestId);
}
