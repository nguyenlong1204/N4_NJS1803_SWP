package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.pojo.ServiceResultPojo;
import com.diamond_shop.diamond_shop.service.DiamondService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/service")
public class ServiceController {

    private final DiamondService diamondService;

    public ServiceController(DiamondService diamondService) {
        this.diamondService = diamondService;
    }


    @GetMapping("/get/all")
    public List<ServiceResultPojo> getAllServices() {
        return diamondService.getAllServices();
    }
}
