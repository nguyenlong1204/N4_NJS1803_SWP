package com.diamond_shop.diamond_shop.controller;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.service.AccountService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class AdminController {

    private final AccountService accountService;

    public AdminController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping(path = "/get")
    public Page<AccountEntity> getAllAccounts(@RequestParam("search") String search, @RequestParam("page") int page, @RequestParam("filter") String filter) {
        return accountService.getAllAccountsById(search, page, filter);
    }

    @PostMapping(path = "/create")
    public String createAccount(@Valid @RequestBody AccountDTO account) {
        return accountService.createAccount(account);
    }

    @PostMapping(path = "/update")
    public String updateAccount(@Valid @RequestBody AccountDTO account) {
        return accountService.updateAccount(account);
    }

    @PostMapping(path = "/delete")
    public void deleteAccount(@Valid @RequestBody AccountDTO account) {
        accountService.deleteAccount(account.getId());
    }
}