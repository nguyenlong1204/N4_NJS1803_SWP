package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountImpl implements AccountService {
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Page<AccountEntity> getAllAccountsById(String search, int pageId, String filter) {
        int pageSize = 5;
        int pageNumber = --pageId;
        if (search.isEmpty() && filter.isEmpty())
            return accountRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by("role")));
        else if (!search.isEmpty() && filter.isEmpty())
            return accountRepository.searchNonFilter(PageRequest.of(pageNumber, pageSize, Sort.by("role")), search);
        else {
            switch (filter) {
                case "fullname":
                    return accountRepository.searchFullName(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
                case "email":
                    return accountRepository.searchEmail(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
                case "phone_number":
                    return accountRepository.searchPhoneNumber(PageRequest.of(pageNumber, pageSize, Sort.by(filter)), search);
            }
        }
        return accountRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by("role")));
    }

    // private AccountDTO accountDTO;
    @Override
    public String addAccount(AccountDTO accountDTO) {
        String updatePhoneNumber = updatePhoneNumber(accountDTO.getPhonenumber());

        String errorMessage = checkDuplicateAccount("add", accountDTO.getId(), accountDTO.getUsername(), "", updatePhoneNumber);
        if (!errorMessage.isEmpty()) return errorMessage;

        RoleEntity role = roleRepository.findById(5).orElseThrow(() -> new RuntimeException("Role not found"));
        String encodedPassword = passwordEncoder.encode(accountDTO.getPassword());
        AccountEntity account = new AccountEntity(role, accountDTO.getUsername(), encodedPassword, accountDTO.getFullname(), updatePhoneNumber);
        accountRepository.save(account);
        return account.getUsername();
    }

    @Override
    public String createAccount(AccountDTO accountDTO) {
        String updatePhoneNumber = updatePhoneNumber(accountDTO.getPhonenumber());

        String errorMessage = checkDuplicateAccount("create", accountDTO.getId(), accountDTO.getUsername(), accountDTO.getEmail(), updatePhoneNumber);
        if (!errorMessage.isEmpty()) return errorMessage;

        RoleEntity role = roleRepository.findById(accountDTO.getRoleid()).orElseThrow(() -> new RuntimeException("Role not found"));
        String encodedPassword = passwordEncoder.encode(accountDTO.getPassword());
        AccountEntity account = new AccountEntity(role, accountDTO.getUsername(), encodedPassword, accountDTO.getFullname(), accountDTO.getEmail(), updatePhoneNumber, accountDTO.getAddress());
        accountRepository.save(account);
        return account.getUsername();
    }

    @Override
    public String checkDuplicateAccount(String type, int id, String username, String email, String phoneNumber) {
        String errorMessage = "";
        boolean isUsernameExist = false, isEmailExist = false, isPhoneNumberExist = false;
        switch (type) {
            case "add":
                isUsernameExist = accountRepository.findByUserName(username) != null;
                if (isUsernameExist) errorMessage += "Username, ";
                isPhoneNumberExist = accountRepository.findByPhoneNumber(phoneNumber) != null;
                if (isPhoneNumberExist) errorMessage += "Phone number ";
                if (isUsernameExist || isPhoneNumberExist) errorMessage += "already exist";
                else return errorMessage;
            case "create":
                isUsernameExist = accountRepository.findByUserName(username) != null;
                if (isUsernameExist) errorMessage += "Username, ";
                isEmailExist = accountRepository.findByEmail(email) != null;
                if (isEmailExist) errorMessage += "Email, ";
                isPhoneNumberExist = accountRepository.findByPhoneNumber(phoneNumber) != null;
                if (isPhoneNumberExist) errorMessage += "Phone number ";
                if (isUsernameExist || isEmailExist || isPhoneNumberExist) return errorMessage + "already exist.";
                else return errorMessage;
            case "update":
                AccountEntity checkAccount = accountRepository.findByUserName(username);
                if (checkAccount != null) {
                    if (checkAccount.getId() != id) {
                        errorMessage += "Username, ";
                        isUsernameExist = true;
                    }
                }
                checkAccount = accountRepository.findByEmail(email);
                if (checkAccount != null) {
                    if (checkAccount.getId() != id) {
                        errorMessage += "Email, ";
                        isEmailExist = true;
                    }
                }
                checkAccount = accountRepository.findByPhoneNumber(phoneNumber);
                if (checkAccount != null) {
                    if (checkAccount.getId() != id) {
                        errorMessage += "PhoneNumber ";
                        isPhoneNumberExist = true;
                    }
                }
                if (isUsernameExist || isEmailExist || isPhoneNumberExist) return errorMessage + "already exist.";
                else return errorMessage;
            default:
                return errorMessage;
        }
    }


    @Override
    public String updateAccount(AccountDTO accountDTO) {
        String updatePhoneNumber = updatePhoneNumber(accountDTO.getPhonenumber());

        String errorMessage = checkDuplicateAccount("update", accountDTO.getId(), accountDTO.getUsername(), accountDTO.getEmail(), updatePhoneNumber);
        if (!errorMessage.isEmpty()) {
            return errorMessage;
        }
        accountRepository.updateAccountInfoById(accountDTO.getId(), accountDTO.getRoleid(), accountDTO.getFullname(), accountDTO.getEmail(), updatePhoneNumber, accountDTO.getAddress());
        return "";
    }

    @Override
    public void deleteAccount(int id) {
        accountRepository.deleteById(id);
    }

    @Override
    public LoginMessageDTO loginAccount(LoginDTO loginDTO) {
        AccountDTO acc2 = new AccountDTO();
        AccountEntity acc1 = accountRepository.findByUserName(loginDTO.getUsername());
        if (acc1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = acc1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<AccountEntity> account = accountRepository.findOneByUserNameAndPassword(loginDTO.getUsername(), encodedPassword);
                if (account.isPresent()) {
                    acc2.setId(acc1.getId());
                    acc2.setRoleid(acc1.getRole().getId());
                    acc2.setFullname(acc1.getFullname());
                    acc2.setUsername(acc1.getUsername());
                    acc2.setPhonenumber(acc1.getPhone_number());
                    return new LoginMessageDTO("Login Success", true, acc2);
                } else {
                    return new LoginMessageDTO("Login Failed", false);
                }
            } else {
                return new LoginMessageDTO("Password Not Match", false);
            }
        } else {
            return new LoginMessageDTO("Not exits", false);
        }
    }

    @Override
    public String updatePhoneNumber(String phoneNumber) {
        if (phoneNumber.length() == 9 && !phoneNumber.startsWith("0")) {
            phoneNumber = "0" + phoneNumber;
        }
        return phoneNumber;
    }
}
