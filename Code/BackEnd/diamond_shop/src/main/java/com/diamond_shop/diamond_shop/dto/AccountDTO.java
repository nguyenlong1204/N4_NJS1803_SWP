package com.diamond_shop.diamond_shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {
    private int id;
    private int roleid;
    private String username;
    private String fullname;
    private String email;
    private String phonenumber;
    private String password;
    private String address;
    public AccountDTO(String username, String fullname, String phonenumber, String password) {
        this.roleid = roleid;
        this.username = username;
        this.fullname = fullname;
        this.phonenumber = phonenumber;
        this.password = password;
    }

}
