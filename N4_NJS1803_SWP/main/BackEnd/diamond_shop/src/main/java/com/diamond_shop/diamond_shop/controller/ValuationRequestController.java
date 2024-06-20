package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import com.diamond_shop.diamond_shop.service.ValuationRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/valuation-request")
public class ValuationRequestController {
    @Autowired
    private ValuationRequestService valuationRequestService;
    @Autowired
    private ProcessRequestService processRequestService;

    @PostMapping(path = "/create")
    public String createValuationRequest(@RequestBody ValuationRequestDTO valuationRequestDTO) {
        int valuationRequestId = valuationRequestService.makeRequest(valuationRequestDTO);
        String makeProcessRequest = processRequestService.processRequest(valuationRequestId);
        return valuationRequestId + " " + makeProcessRequest;
    }

    @GetMapping(path = "/get")
    public Page<ValuationRequestEntity> viewCustomerRequest(@RequestParam("search") String search, @RequestParam("page") int page, @RequestParam("filter") String filter) {
        return valuationRequestService.viewRequest(search, page, filter);
    }
}
