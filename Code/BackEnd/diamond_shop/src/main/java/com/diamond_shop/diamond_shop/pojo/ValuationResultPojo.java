package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class ValuationResultPojo {
    private String id;
    private Date createdDate;
    private String serviceName;
    private String serviceStatistic;
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
