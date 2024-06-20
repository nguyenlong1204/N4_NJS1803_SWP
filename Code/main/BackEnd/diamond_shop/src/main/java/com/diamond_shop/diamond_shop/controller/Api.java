package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.*;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.service.AccountService;
import com.diamond_shop.diamond_shop.service.ProcessRequestService;
import com.diamond_shop.diamond_shop.service.ProcessResultService;
import com.diamond_shop.diamond_shop.service.ValuationResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/account")
public class Api {

    @Autowired
    private AccountService accountService;
    @Autowired
    private ProcessRequestService processRequestService;
    @Autowired
    private ProcessResultService processResultService;
    @Autowired
    private ValuationResultService valuationResultService;

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody AccountDTO accountDTO) {
        return accountService.addAccount(accountDTO);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
        LoginMessageDTO loginResponse = accountService.loginAccount(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping(path = "/update-status-request")
    public String postMethodName(@RequestBody UpdateRequestDTO updateRequestDTO) {
        if (updateRequestDTO.getType().equals("Receive")) {
            ProcessRequestEntity processRequest = processRequestService.updateRequest(updateRequestDTO);
            valuationResultService.assignForValuationStaff(processRequest);
            processResultService.processResult(processRequest);
            return "Update and assign to valuation staff successful!";
        } else if (updateRequestDTO.getType().equals("Reject")) {
            return processRequestService.cancelRequest(updateRequestDTO.getConsultingStaffId(), updateRequestDTO.getValuationRequestId());
        } else return null;
    }

    @PostMapping(path = "/valuate-diamond")
    public String postMethodName(@RequestBody ValuationResultDTO valuationResultDTO) {
        //Valuation staff
        return valuationResultService.valuateDiamond(valuationResultDTO);
    }

}
