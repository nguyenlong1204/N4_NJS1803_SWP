package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.DiamondCheckRequestDTO;
import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import com.diamond_shop.diamond_shop.service.DiamondService;
import com.google.gson.Gson;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/diamond")
public class DiamondController {
    @Autowired
    private DiamondService diamondService;

    @PostMapping(value = "/calculate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getDiamondAttr(@RequestBody DiamondCheckRequestDTO request) {
        String gradingLab = request.getGradingLab();
        String carat = request.getCarat();
        String shape = request.getShape();
        String color = request.getColor();
        String clarity = request.getClarity();
        String cut = request.getCut();
        ResponseEntity<String> result = diamondService.fetchDiamondCalculate(gradingLab, carat, shape, color, clarity, cut);
        System.out.println(result);
        Gson gson=new Gson();
        return ResponseEntity.ok(gson.toJson(result));
    }

    @GetMapping(value = "/service")
    public List<ServiceEntity> getAllServices() {
        return diamondService.getAllServices();
    }
}
