package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @GetMapping(value = "/income")
    public int getIncome() {
        return paymentService.getIncome();
    }
}
