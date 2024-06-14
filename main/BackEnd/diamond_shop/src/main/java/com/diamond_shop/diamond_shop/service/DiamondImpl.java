package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.pojo.ServiceResultPojo;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class DiamondImpl implements DiamondService {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public ResponseEntity<String> fetchDiamondCalculate(String gradingLab, String carat, String shape, String color, String clarity, String cut) {
        String fetchUrl = "http://www.idexonline.com/DPService.asp";
        Map<String, String> params = new LinkedHashMap<>();
        params.put("SID", "4wp7go123jqtkdyd5f2e");
        params.put("cut", shape);
        params.put("carat", carat);
        params.put("color", color);
        params.put("clarity", clarity);
        params.put("make", cut);
        params.put("cert", gradingLab);
        String finalUrl = fetchUrl.concat(builderQueryString(params));
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(finalUrl, String.class);
        return response;
    }

    @Override
    public List<ServiceResultPojo> getAllServices() {
        List<ServiceResultPojo> services = serviceRepository.searchAllServices();
        System.out.println(services);
        return services;
    }

    private String builderQueryString(Map<String, String> params) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("?");
        for (Map.Entry<String, String> entry : params.entrySet()) {
            stringBuilder.append(entry.getKey()).append("=").append(entry.getValue()).append("&");
        }
        stringBuilder.deleteCharAt(stringBuilder.length() - 1);
        return stringBuilder.toString();
    }
}
