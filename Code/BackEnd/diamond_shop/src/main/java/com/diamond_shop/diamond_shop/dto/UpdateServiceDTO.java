package com.diamond_shop.diamond_shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UpdateServiceDTO {
    int id;
    String name;
    int price;
    int time;
    int statisticId;
    String statisticName;
}
