package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class ProcessRequestPojo {
    private int consultingStaffId;
    private String consultingStaffName;
    private int valuationRequestId;
    private String type;
    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private String serviceName;
    private String servicePrice;
    private String serviceTime;
    private String statisticName;
    private Date createdDate;
    private Date finishedDate;
    private Date sealingDate;
    private String description;
}
