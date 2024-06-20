package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import com.diamond_shop.diamond_shop.service.ProcessResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/process-result")
public class ProcessResultController {
    @Autowired
    private ProcessResultService processResultService;

    @GetMapping(path = "/get")
    public Page<ProcessResultEntity> viewProcessResult(@RequestParam("staffId") int valuationStaff) {
        return processResultService.viewProcessResult(valuationStaff);
    }
}
