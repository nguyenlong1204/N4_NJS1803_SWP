package com.diamond_shop.diamond_shop.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ValuationRequestDTO {
    private int requestId;
    private String username;
    private int serviceId;
    private Date createdDate;
    private String description;
}
