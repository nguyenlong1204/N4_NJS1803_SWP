package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import com.diamond_shop.diamond_shop.service.ProcessResultService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/process-result")
public class ProcessResultController {
    private final ProcessResultService processResultService;

    public ProcessResultController(ProcessResultService processResultService) {
        this.processResultService = processResultService;
    }

    @GetMapping(path = "/get/valuation-staff")
    public Page<ProcessResultEntity> getAllByValuationStaffId(@RequestParam("page") int page, @RequestParam("valuationStaffId") int valuationStaffId) {
        return processResultService.getAllByValuationStaffId(page, valuationStaffId);
    }
}
