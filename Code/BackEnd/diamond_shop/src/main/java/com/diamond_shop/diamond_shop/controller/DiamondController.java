package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.DiamondCheckRequestDTO;
import com.diamond_shop.diamond_shop.service.DiamondService;
import com.google.gson.Gson;
import jakarta.validation.Valid;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/diamond")
public class DiamondController {
    private final DiamondService diamondService;

    public DiamondController(DiamondService diamondService) {
        this.diamondService = diamondService;
    }

    @PostMapping(value = "/calculate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getDiamondAttr(@Valid @RequestBody DiamondCheckRequestDTO request) {
        String gradingLab = request.getGradingLab();
        String carat = request.getCarat();
        String shape = request.getShape();
        String color = request.getColor();
        String clarity = request.getClarity();
        String cut = request.getCut();
        ResponseEntity<String> result = diamondService.fetchDiamondCalculate(gradingLab, carat, shape, color, clarity, cut);
        Gson gson = new Gson();
        return ResponseEntity.ok(gson.toJson(result));
    }
}
