package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.ReceivePendingRequestDTO;
import com.diamond_shop.diamond_shop.dto.UpdateProcessRequestDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/process-request")
public class ProcessRequestController {
    private final ProcessRequestService processRequestService;

    public ProcessRequestController(ProcessRequestService processRequestService) {
        this.processRequestService = processRequestService;
    }

    @GetMapping(path = "/get/all")
    public Page<ProcessRequestEntity> viewAllProcessRequest(@RequestParam("page") int page) {
        return processRequestService.viewAllProcessRequests(page);
    }

    @GetMapping(path = "/get/consulting-staff")
    public Page<ProcessRequestEntity> viewProcessRequestsByStaff(@RequestParam("page") int page, @RequestParam("id") int consultingStaffId) {
        return processRequestService.viewProcessRequestsByConsultingStaffId(page, consultingStaffId);
    }

    @GetMapping(path = "/get/customer")
    public Page<ProcessRequestEntity> viewProcessRequestsByCustomer(@RequestParam("page") int page, @RequestParam("id") int customerId) {
        return processRequestService.viewProcessRequestsByCustomerId(page, customerId);
    }

    @PostMapping(path = "/create")
    public String createProcessRequest(@Valid @RequestBody ReceivePendingRequestDTO receivePendingRequestDTO) {
        return processRequestService.createProcessRequest(receivePendingRequestDTO);
    }

    @PutMapping(path = "/update")
    public String updateProcessRequest(@RequestParam("id") int id, @Valid @RequestBody UpdateProcessRequestDTO updateProcessRequestDTO) {
        return processRequestService.updateProcessRequest(id, updateProcessRequestDTO);
    }
}
