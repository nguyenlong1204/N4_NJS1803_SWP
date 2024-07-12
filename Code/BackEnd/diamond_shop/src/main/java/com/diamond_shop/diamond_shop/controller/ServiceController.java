package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.UpdateServiceDTO;
import com.diamond_shop.diamond_shop.pojo.ServiceResultPojo;
import com.diamond_shop.diamond_shop.service.DiamondService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/service")
@RequiredArgsConstructor
public class ServiceController {

    private final DiamondService diamondService;

    @GetMapping("/get/all")
    public List<ServiceResultPojo> getAllServices() {
        return diamondService.getAllServices();
    }

    @PutMapping("/update")
    public String updateService(@RequestBody UpdateServiceDTO updateServiceDTO) {
        return diamondService.updateService(updateServiceDTO);
    }
}
