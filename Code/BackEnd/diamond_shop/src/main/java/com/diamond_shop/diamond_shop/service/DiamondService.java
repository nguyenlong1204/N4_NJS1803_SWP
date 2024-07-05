package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.pojo.ServiceResultPojo;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DiamondService {
    ResponseEntity<String> fetchDiamondCalculate(String gradingLab, String carat, String shape, String color, String clarity, String cut);
//
    List<ServiceResultPojo> getAllServices();
}
