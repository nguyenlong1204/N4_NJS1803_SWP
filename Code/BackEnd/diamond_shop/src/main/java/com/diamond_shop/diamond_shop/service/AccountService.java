package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import org.springframework.data.domain.Page;

import java.util.List;

public interface AccountService {

    Page<AccountEntity> getAllAccountsById(String search, int pageId, String filter);

    String addAccount(AccountDTO accountDTO);

    String createAccount(AccountDTO accountDTO);

    String updateAccount(AccountDTO accountDTO);

    void deleteAccount(int id);

    LoginMessageDTO loginAccount(LoginDTO loginDTO);

    String updatePhoneNumber(String phoneNumber);

    String checkDuplicateAccount(String type, int id, String username, String email, String phoneNumber);
}
