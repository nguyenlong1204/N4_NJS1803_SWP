package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class SealingLetterPojo {
    int id;
    Date createdDate;
    String content;
    int valuationRequestId;
    String customerName;
    Date receivedDate;
    Date finishDate;
    Date sealingDate;
}
