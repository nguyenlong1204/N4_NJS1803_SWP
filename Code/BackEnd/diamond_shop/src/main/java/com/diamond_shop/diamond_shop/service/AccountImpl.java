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
    public List<AccountEntity> getAllAccounts() {
        List<AccountEntity> accounts = accountRepository.getAllAccounts();
        return accounts;
    }

    public Page<AccountEntity> getAllAccountsById(int pageId) {
        int pageSize = 5;
        int pageNumber = --pageId;
        Page<AccountEntity> accounts = accountRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by("role")));
        return accounts;
    }

    // private AccountDTO accountDTO;
    @Override
    public String addAccount(AccountDTO a) {

        RoleEntity role = roleRepository.findById(5)
                .orElseThrow(() -> new RuntimeException("Role not found"));

        AccountEntity account = new AccountEntity(
                role,
                a.getUsername(),
                a.getPassword(),
                a.getFullname(),
                a.getPhonenumber(),
                this.passwordEncoder.encode(a.getPassword())
        );
        accountRepository.save(account);
        return account.getUsername();
    }

    @Override
    public void createAccount(AccountDTO accountDTO) {
        RoleEntity role = roleRepository.findById(accountDTO.getRoleid()).orElseThrow(() -> new RuntimeException("Role not found"));
        System.out.println(role);
        AccountEntity account = new AccountEntity(
                role,
                accountDTO.getUsername(),
                accountDTO.getPassword(),
                accountDTO.getFullname(),
                accountDTO.getEmail(),
                accountDTO.getPhonenumber(),
                accountDTO.getAddress()
        );
        System.out.println(account);
        accountRepository.save(account);
    }

    @Override
    public void updateAccount(int id, int role, String fullname, String email, String phonenumber, String address) {
        accountRepository.updateAccountInfoById(id, role, fullname, email, phonenumber, address);
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
                    acc2.setFullname(acc1.getFullname());
                    acc2.setUsername(acc1.getUsername());
                    acc2.setPhonenumber(acc1.getPhone_number());
                    return new LoginMessageDTO("Login Success", true, acc2);
                } else {
                    return new LoginMessageDTO("Login Failed", false);
                }
            } else {
                return new LoginMessageDTO("password Not Match", false);
            }
        } else {
            return new LoginMessageDTO("Email not exits", false);
        }
    }
}
