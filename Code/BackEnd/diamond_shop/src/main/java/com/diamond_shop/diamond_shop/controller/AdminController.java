package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.service.AccountService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AccountService accountService;

    @GetMapping(path = "/get")
    public Page<AccountEntity> getAllAccounts(@RequestParam("search") String search, @RequestParam("page") int page, @RequestParam("filter") String filter, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        return accountService.getAllAccountsById(search, page, filter);
    }

    @GetMapping(path = "/getDeletedAccounts")
    public Page<AccountEntity> getAllAccountsNotActive(@RequestParam("search") String search, @RequestParam("page") int page, @RequestParam("filter") String filter) {
        return accountService.getAllDeletedAccountsById(search, page, filter);
    }

    @PostMapping(path = "/create")
    public String createAccount(@Valid @RequestBody AccountDTO account) {
        return accountService.createAccount(account);
    }

    @PutMapping(path = "/update")
    public String updateAccount(@Valid @RequestBody AccountDTO account) {
        System.out.println(account);
        return accountService.updateAccount(account);
    }

    @PostMapping(path = "/restoreAccount")
    public String restoreAccount(@RequestParam("id") int id) {
        return accountService.restoreAccount(id);
    }

    @DeleteMapping(path = "/delete")
    public void deleteAccount(@RequestParam("id") int id) {
        accountService.deleteSoftAccount(id);
    }
}