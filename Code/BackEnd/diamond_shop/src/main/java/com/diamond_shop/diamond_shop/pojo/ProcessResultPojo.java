package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
public class ProcessResultPojo {
    private String valuationResultId;
    private String valuationStaffName;
    private String serviceName;
    private String serviceStatistic;
    private String status;
    private String origin;
    private String shape;
    private BigDecimal carat;
    private String color;
    private String cut;
    private String clarity;
    private String symmetry;
    private String polish;
    private String fluorescence;
    private String measurements;
    private BigDecimal diamondTable;
    private BigDecimal depth;
    private BigDecimal lengthToWidthRatio;
    private BigDecimal price;
}
