package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AdminResultPojo {
    private int id;
    private int roleId;
    private String roleName;
    private String username;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String address;
}
