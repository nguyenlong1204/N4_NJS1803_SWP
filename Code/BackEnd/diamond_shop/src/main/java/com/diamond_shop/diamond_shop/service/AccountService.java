package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.ForgetPasswordDTO;
import com.diamond_shop.diamond_shop.dto.GoogleLoginRequestDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.ResetPasswordRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface AccountService {

    Page<AccountEntity> getAllAccountsById(String search, int pageId, String filter);

    Page<AccountEntity> getAllDeletedAccountsById(String search, int pageId, String filter);

    String addAccount(AccountDTO accountDTO);

    String createAccount(AccountDTO accountDTO);

    String deleteHardAccount(int id);

    String deleteSoftAccount(int id);
    
    String updateAccount(AccountDTO accountDTO);

    String activate(String code, HttpServletResponse response);

    String restoreAccount(int id);

    ResponseEntity<?> loginAccount(LoginDTO loginDTO);

    ResponseEntity<?> loginGoogleAccount(GoogleLoginRequestDTO googleLoginRequestDTO);

    ResponseEntity<?> forgotPassword(ForgetPasswordDTO forgetPasswordDTO);

    ResponseEntity<?> resetPassword(ResetPasswordRequestDTO resetPasswordRequestDTO, HttpServletResponse response);

    ResponseEntity<?> resetForgetPassword(ResetPasswordRequestDTO resetPasswordRequestDTO);
    
    String updatePhoneNumber(String phoneNumber);

    String checkDuplicateAccount(String type, int id, String username, String email, String phoneNumber);

}
