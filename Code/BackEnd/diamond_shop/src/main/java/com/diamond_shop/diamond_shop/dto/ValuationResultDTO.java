package com.diamond_shop.diamond_shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ValuationResultDTO {
    private int id;
    private String origin;
    private String shape;
    private BigDecimal carat_weight;
    private String color;
    private String cut;
    private String clarity;
    private String measurements;
    private String polish;
    private String symmetry;
    private String fluorescence;
    private String proportions;
    private BigDecimal price;
}
