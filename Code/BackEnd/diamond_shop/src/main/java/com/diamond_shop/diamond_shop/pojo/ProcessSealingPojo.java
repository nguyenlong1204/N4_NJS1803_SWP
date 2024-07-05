package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProcessSealingPojo {
    private int id;
    private String status;
    private int sealingLetterId;
    private String sealingLetterContent;
    private Date valuationRequestSealingDate;
    private Date createSealingLetterDate;
    private String valuatedDiamondId;
    private String managerName;
    private int customerId;
    private String customerName;
    private int serviceId;
    private String serviceName;
}

