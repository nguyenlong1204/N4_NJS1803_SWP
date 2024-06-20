package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class ProcessResultPojo {
    private int valuationResultId;
    private String valuationStaffName;
    private String serviceName;
    private String type;
    private Date createdDate;
    private String origin;
    private String shape;
    private BigDecimal caratWeight;
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
