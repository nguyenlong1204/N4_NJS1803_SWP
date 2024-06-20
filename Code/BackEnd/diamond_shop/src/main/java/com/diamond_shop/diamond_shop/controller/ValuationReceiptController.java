package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.service.ValuationReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/valuation-receipt")
public class ValuationReceiptController {

    @Autowired
    private ValuationReceiptService valuationReceiptService;

    @GetMapping(path = "/get")
    public String getAllValuationReceipt() {

        return null;
    }
    }
