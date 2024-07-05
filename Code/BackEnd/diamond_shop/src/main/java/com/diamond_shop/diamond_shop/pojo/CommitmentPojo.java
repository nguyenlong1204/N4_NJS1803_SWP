package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class CommitmentPojo {
    int id;
    Date createdDate;
    int valuationRequestId;
    String customerName;
    int paymentId;
    Date paymentDate;
    String bank;
    int amount;
    String transactionNo;
    String orderInfo;
}
