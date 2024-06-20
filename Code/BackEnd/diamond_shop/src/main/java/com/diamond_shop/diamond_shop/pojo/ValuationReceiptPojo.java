package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ValuationReceiptPojo {
    private String customerName;
    private String customerPhoneNumber;
    private String customerAddress;
    private String price;
}
