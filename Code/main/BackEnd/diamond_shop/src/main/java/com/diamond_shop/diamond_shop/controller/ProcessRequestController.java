package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/process-request")
public class ProcessRequestController {
    @Autowired
    private ProcessRequestService processRequestService;

    @GetMapping(path = "/get")
    public Page<ProcessRequestEntity> viewProcessRequestByStaff(@RequestParam("staffId") int consultingStaffId) {

        return processRequestService.viewProcessRequests(consultingStaffId);
    }
}
