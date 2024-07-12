package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.PendingRequestDTO;
import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import com.diamond_shop.diamond_shop.service.PendingRequestService;

import jakarta.servlet.http.HttpServletResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/pending-request")
@RequiredArgsConstructor
public class PendingRequestController {
    private final PendingRequestService pendingRequestService;

    @GetMapping(path = "/get/all")
    public Page<PendingRequestsEntity> getAllPendingRequests(@RequestParam("page") int page) {
        return pendingRequestService.getAllPendingRequests(page);
    }

    @GetMapping(path = "/customer/get")
    public Page<PendingRequestsEntity> getPendingRequestsByCustomerId(@RequestParam("page") int page, @RequestParam("id") int customerId, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        return pendingRequestService.getAllByCustomerId(page, customerId);
    }

    @PostMapping(path = "/create")
    public String createPendingRequest(@Valid @RequestBody PendingRequestDTO pendingRequestDTO) {
        if (pendingRequestService.makePendingRequest(pendingRequestDTO) != 0)
            return "Successful. Our team will contact you soon !";
        else return "Please login first !";
    }

    @DeleteMapping(path = "/delete")
    public String cancelPendingRequest(@RequestParam int id) {
        return pendingRequestService.cancelPendingRequest(id);
    }

    @GetMapping(path = "/customer/check")
    public String checkCustomerPendingRequest(@RequestParam("id") int customerId) {
        return pendingRequestService.checkCustomerPendingRequest(customerId);
    }
}
