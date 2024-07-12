package com.diamond_shop.diamond_shop.pojo;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class LoginPojo {
    private String token;
    private String type = "Bearer";
    private int id;
    private String username;
    private String email;
    private Collection<? extends GrantedAuthority> authorities;
    public LoginPojo(String token, int id, String username, String email, Collection<? extends GrantedAuthority> collection) {
        this.token = token;
        this.id = id;
        this.username = username;
        this.email = email;
        this.authorities = collection;
    }
}
