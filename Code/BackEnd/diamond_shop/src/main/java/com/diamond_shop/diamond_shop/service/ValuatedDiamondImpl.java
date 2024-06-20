package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ValuatedDiamondEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.repository.ValuatedDiamondRepository;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class ValuatedDiamondImpl implements ValuatedDiamondService {
    @Autowired
    private ValuatedDiamondRepository valuatedDiamondRepository;
    @Autowired
    private ValuationResultRepository valuationResultRepository;

    @Override
    public Page<ValuatedDiamondEntity> getAllValuatedDiamonds() {
        int pageSize = 5;
        int pageNumber = 0;
        return valuatedDiamondRepository.findAll(PageRequest.of(pageNumber, pageSize));
    }

    @Override
    public Optional<ValuatedDiamondEntity> getValuatedDiamondById(String id) {
        return valuatedDiamondRepository.findById(id);
    }

    @Override
    public Optional<ValuatedDiamondEntity> getValuatedDiamondByValuationRequestId(int id) {
        return valuatedDiamondRepository.findByValuationRequestId(id);
    }

    @Override
    public String createValuatedDiamond(int valuationResultId) {
        ValuatedDiamondEntity valuatedDiamond = valuatedDiamondRepository.findByValuationResultId(valuationResultId);
        if (valuatedDiamond == null) {
            long randomId = (long) (Math.random() * Math.pow(10, 10));
            ValuationResultEntity valuationResult = valuationResultRepository.findById(valuationResultId);
            valuatedDiamond = new ValuatedDiamondEntity(Long.toString(randomId), valuationResult, new Date());
            valuatedDiamondRepository.save(valuatedDiamond);
            return "Create new valuated diamond";
        }
        return "Have created a valuated diamond";
    }

    @Override
    public boolean checkValuatedDiamond(String id) {
        return valuatedDiamondRepository.findById(id).isPresent();
    }
}
