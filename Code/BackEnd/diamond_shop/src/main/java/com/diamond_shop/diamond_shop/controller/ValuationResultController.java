package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.CreateImageDTO;
import com.diamond_shop.diamond_shop.dto.ValuationResultDTO;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.pojo.DetailDiamondPojo;
import com.diamond_shop.diamond_shop.pojo.DiamondPojo;
import com.diamond_shop.diamond_shop.service.ValuationResultService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("api/valuation-result")
@RequiredArgsConstructor
public class ValuationResultController {
    private final ValuationResultService valuationResultService;

    @GetMapping("/total")
    public int totalValuationResult() {
        return valuationResultService.totalValuationResults();
    }

    @PutMapping(path = "/valuate", produces = MediaType.APPLICATION_JSON_VALUE)
    public String valuateDiamond(@RequestParam("id") String id, @RequestBody ValuationResultDTO valuationResultDTO) {
        return valuationResultService.valuateDiamond(id, valuationResultDTO);
    }

    @GetMapping(path = "/get/all")
    public Page<ValuationResultEntity> getAllValuationResults(@RequestParam("page") int page) {
        return valuationResultService.getAllValuationResults(page);
    }

    @GetMapping(path = "/get")
    public Optional<ValuationResultEntity> getValuationResult(@RequestParam("id") String id) {
        return valuationResultService.getValuationResultById(id);
    }

    @GetMapping(path = "/customer/get")
    public Page<ValuationResultEntity> getListValuationResultByCustomerId(@RequestParam("page") int page, @RequestParam("id") int id) {
        return valuationResultService.getValuationResultsByCustomerId(page, id);
    }

    @GetMapping(path = "/valuation-request/get")
    public Optional<ValuationResultEntity> getValuationResultByRequestId(@RequestParam("id") int id) {
        return valuationResultService.getValuationResultByValuationRequestId(id);
    }

    @GetMapping(path = "/image/get")
    public List<String> getValuationResultImage(@RequestParam("id") String id) {
        return valuationResultService.getValuationResultImage(id);
    }

    @PostMapping(path = "/image/create")
    public String createValuationResultImage(@Valid @RequestBody CreateImageDTO createImageDTO) {
        return valuationResultService.createValuationResultImage(createImageDTO);
    }

    @DeleteMapping(path = "/image/delete")
    public String deleteValuationResultImage(@RequestParam("id") String id) {
        return valuationResultService.deleteValuationResultImage(id);
    }

    @GetMapping("/crawl-natural")
    public List<DiamondPojo> scrapeNaturalDiamonds(@RequestParam String shape) {
        return valuationResultService.crawlNaturalDiamond(shape);
    }

    @GetMapping("/crawl-lab-grown")
    public List<DiamondPojo> scrapeLabGrownDiamonds(@RequestParam String shape) {
        return valuationResultService.crawlLabGrownDiamond(shape);
    }

    @GetMapping("/crawl-detail-natural")
    public List<DetailDiamondPojo> getMethodName(@RequestParam("carat") String carat) {
        return valuationResultService.crawlDetailDiamond(carat);
    }

}