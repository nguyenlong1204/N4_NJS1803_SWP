package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class ValuationReceiptPojo {
    int id;
    Date createdDate;
    String customerName;
    String customerPhone;
    String consultingStaffName;
    String consultingStaffPhone;
    String description;
    Date paymentDate;
    String bank;
    int amount;
    String transactionNo;
    String orderInfo;
}
