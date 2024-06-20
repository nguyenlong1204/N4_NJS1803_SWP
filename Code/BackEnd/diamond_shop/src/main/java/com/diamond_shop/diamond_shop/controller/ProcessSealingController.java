package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ProcessSealingEntity;
import com.diamond_shop.diamond_shop.repository.ProcessSealingRepository;
import com.diamond_shop.diamond_shop.service.ProcessSealingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/process-sealing")
public class ProcessSealingController {

    @Autowired
    ProcessSealingService processSealingService;
    @Autowired
    ProcessSealingRepository processSealingRepository;

    @GetMapping(path = "/get/all")
    public Page<ProcessSealingEntity> getAllSealing(@RequestParam("page") int page) {
        return processSealingService.findAllProcessSealing(page);
    }

    @GetMapping(path = "/update")
    public String updateSealing(@RequestParam("id") int id, @RequestParam("type") String type) {
        ProcessSealingEntity processSealing = processSealingRepository.findById(id);
        if (processSealing == null) return "Cannot find this process sealing";

        if (!processSealing.getStatus().equals("Not resolved yet"))
            return "Cannot update this process sealing";
        if (type.equals("accept")) {
            if (!processSealingService.acceptSealingLetter(processSealing).isEmpty())
                return "Accept successfully";
        } else if (type.equals("reject")) {
            if (!processSealingService.rejectSealingLetter(processSealing).isEmpty())
                return "Reject successfully";
        }
        return "";
    }
}
