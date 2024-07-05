package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ValuationRequestPojo {
    private int id;
    private String serviceName;
    private int servicePrice;
    private String serviceStatistic;
    private Date createdDate;
    private Date finishDate;
    private Date sealingDate;
}
