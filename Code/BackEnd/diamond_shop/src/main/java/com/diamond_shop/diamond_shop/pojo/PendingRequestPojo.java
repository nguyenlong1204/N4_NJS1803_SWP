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
public class PendingRequestPojo {
    int id;
    Date createdDate;
    String description;
    int customerId;
    String customerName;
    String customerEmail;
    String customerPhone;
}
