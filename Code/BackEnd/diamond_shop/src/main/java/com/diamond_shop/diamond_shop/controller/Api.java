package com.diamond_shop.diamond_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/account")
public class Api {

    @Autowired
    private AccountService accountService;

    @GetMapping(path = "/welcome")
    public String welcome() {
        return "Hello";
    }

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody AccountDTO accountDTO) {
        return accountService.addAccount(accountDTO);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
        LoginMessageDTO loginResponse = accountService.loginAccount(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
