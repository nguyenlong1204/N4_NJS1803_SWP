package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.service.AccountService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/account")
public class Api {

    private final AccountService accountService;

    public Api(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping(path = "/welcome")
    public String welcome() {
        return "Hello";
    }

    @PostMapping(path = "/save")
    public String saveEmployee(@Valid @RequestBody AccountDTO accountDTO, Errors errors) {
        if (errors.hasErrors()) {
            return errors.getAllErrors().toString();
        }
        return accountService.addAccount(accountDTO);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@Valid @RequestBody LoginDTO loginDTO) {
        LoginMessageDTO loginResponse = accountService.loginAccount(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @DeleteMapping(path = "/delete")
    public String deleteCustomer(@RequestParam("id") int id) {
        return accountService.deleteHardAccount(id);
    }
}
