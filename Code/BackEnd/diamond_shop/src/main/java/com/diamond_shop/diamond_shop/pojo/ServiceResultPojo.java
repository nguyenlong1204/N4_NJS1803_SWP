package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ServiceResultPojo {
    private int id;
    private String name;
    private int price;
    private int time;
    private int statisticId;
    private String statisticName;
}
