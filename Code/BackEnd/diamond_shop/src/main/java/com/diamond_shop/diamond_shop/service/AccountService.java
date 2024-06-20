package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import org.springframework.data.domain.Page;

import java.util.List;

public interface AccountService {
    List<AccountEntity> getAllAccounts();

    Page<AccountEntity> getAllAccountsById(int pageId);

    String addAccount(AccountDTO accountDTO);

    void createAccount(AccountDTO accountDTO);

    void updateAccount(int id, int role, String fullname, String email, String phonenumber, String address);

    void deleteAccount(int id);

    LoginMessageDTO loginAccount(LoginDTO loginDTO);
}
