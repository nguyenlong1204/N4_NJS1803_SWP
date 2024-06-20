package com.diamond_shop.diamond_shop.dto;

import java.util.Date;

import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ValuationResultDTO {
    private int id;
    private ValuationRequestEntity valuationRequestId;
    private Date createdDate;
    private Date sealing_time;
    private String origin;
    private String shape;
    private String carat_weight;
    private String color;
    private String cut;
    private String clarity;
    private String measurements;
    private String polish;
    private String symmetry;
    private String fluorescence;
    private String proportions;
    public ValuationResultDTO(ValuationRequestEntity valuationRequestId) {
        this.valuationRequestId = valuationRequestId;
    }
       
}
