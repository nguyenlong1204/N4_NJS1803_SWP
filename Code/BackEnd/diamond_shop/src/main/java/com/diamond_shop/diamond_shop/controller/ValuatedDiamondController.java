package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.entity.ValuatedDiamondEntity;
import com.diamond_shop.diamond_shop.service.ValuatedDiamondService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/valuated-diamond")
public class ValuatedDiamondController {

    @Autowired
    ValuatedDiamondService valuatedDiamondService;

    @GetMapping(path = "/all")
    public Page<ValuatedDiamondEntity> getValuatedDiamonds() {
        return valuatedDiamondService.getAllValuatedDiamonds();
    }

    @GetMapping(path = "/get")
    public Optional<ValuatedDiamondEntity> getValuatedDiamondById(@RequestParam("id") String id) {
        return valuatedDiamondService.getValuatedDiamondById(id);
    }

    @GetMapping(path = "/check")
    public boolean checkValuatedDiamondById(@RequestParam("id") String id) {
        return valuatedDiamondService.checkValuatedDiamond(id);
    }
}
