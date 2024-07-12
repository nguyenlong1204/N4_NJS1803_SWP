package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import com.diamond_shop.diamond_shop.service.SealingLetterService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/sealing-letter")
@RequiredArgsConstructor
public class SealingLetterController {
    private final SealingLetterService sealingLetterService;

    @GetMapping("/get/all")
    public Page<SealingLetterEntity> getAllSealingLetters(@RequestParam("page") int page) {
        return sealingLetterService.getAllSealingLetters(page);
    }

    @GetMapping("/customer/get")
    public Page<SealingLetterEntity> getAllSealingLettersByCustomerId(@RequestParam("page") int page, @RequestParam("id") int customerId) {
        return sealingLetterService.getAllSealingLettersByCustomerId(page, customerId);
    }

    @PostMapping("/create")
    public String createSealingLetterByValuationRequestId(@RequestParam int valuationRequestId) {
        return sealingLetterService.createSealingLetter(valuationRequestId);
    }
}
