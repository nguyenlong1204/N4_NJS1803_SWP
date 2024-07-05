package com.diamond_shop.diamond_shop.pojo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VNpayBillPojo {
    private String Customername;
    private Date date;
    private String bank;
    private int amount;
    private String transaction;
    private String order_info;
}
