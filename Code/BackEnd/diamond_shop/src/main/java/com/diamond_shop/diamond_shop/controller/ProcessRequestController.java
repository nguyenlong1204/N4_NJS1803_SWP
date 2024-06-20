package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.UpdateRequestDTO;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import com.diamond_shop.diamond_shop.service.ProcessResultService;
import com.diamond_shop.diamond_shop.service.ValuationReceiptService;
import com.diamond_shop.diamond_shop.service.ValuationResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/process-request")
public class ProcessRequestController {
    @Autowired
    private ProcessRequestService processRequestService;
    @Autowired
    private ValuationResultService valuationResultService;
    @Autowired
    private ProcessResultService processResultService;

    @Autowired
    ValuationReceiptService valuationReceiptService;

    @GetMapping(path = "/get")
    public Page<ProcessRequestEntity> viewProcessRequestByStaff(@RequestParam("page") int page, @RequestParam("staffId") int consultingStaffId) {
        return processRequestService.viewProcessRequests(page, consultingStaffId);
    }

    @PostMapping(path = "/update")
    public String updateStatus(@RequestBody UpdateRequestDTO updateRequestDTO) {
        if (updateRequestDTO.getProcessRequestType().equals("Not resolved yet")) {
            if (updateRequestDTO.getType().equalsIgnoreCase("receive")) {
                processRequestService.updateRequest("receive", updateRequestDTO);
                return "Receive request successfully";
            } else if (updateRequestDTO.getType().equalsIgnoreCase("reject")) {
                return processRequestService.cancelRequest(updateRequestDTO.getConsultingStaffId(), updateRequestDTO.getValuationRequestId());
            }
        } else if (updateRequestDTO.getProcessRequestType().equals("Processing")) {
            if (updateRequestDTO.getType().equalsIgnoreCase("diamond")) {
                ProcessRequestEntity processRequest = processRequestService.updateRequest("diamond", updateRequestDTO);
                valuationResultService.assignForValuationStaff(processRequest);
                processResultService.processResult(processRequest);
                valuationReceiptService.createReceipt(updateRequestDTO.getValuationRequestId());
                return "Update and assign to valuation staff successful!";
            }
        } else return "Has already assigned to a valuation staff";
        return null;
    }
}
