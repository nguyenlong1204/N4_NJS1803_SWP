package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.config.JWTUtil;
import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.dto.ForgetPasswordDTO;
import com.diamond_shop.diamond_shop.dto.GoogleLoginRequestDTO;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.ResetPasswordRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.pojo.LoginPojo;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import java.util.List;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.UUID;

@Service
public class AccountImpl implements AccountService {

    private final AccountRepository accountRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtil JWTUtil;
    @Autowired
    private EmailService emailService;
    @Autowired
    private AuthenticationManager authenticationManager;

    public AccountImpl(AccountRepository accountRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.accountRepository = accountRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

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

    @Override
    public String addAccount(AccountDTO accountDTO) {
        String updatePhoneNumber = updatePhoneNumber(accountDTO.getPhonenumber());
        String errorMessage = checkDuplicateAccount("add", accountDTO.getId(), accountDTO.getUsername(), accountDTO.getEmail(), updatePhoneNumber);
        if (!errorMessage.isEmpty()) {
            return errorMessage;
        }
        String encodedPassword = passwordEncoder.encode(accountDTO.getPassword());
        RoleEntity roleEntity = roleRepository.findById(5).orElseThrow(() -> new RuntimeException("Role not found"));
        String activationCode = UUID.randomUUID().toString();

        AccountEntity accountEntity = new AccountEntity(
                roleEntity,
                accountDTO.getUsername(),
                encodedPassword,
                accountDTO.getFullname(),
                updatePhoneNumber,
                accountDTO.getEmail(),
                false,
                activationCode
        );
        accountRepository.save(accountEntity);
        emailService.sendActivationEmail(accountDTO.getEmail(), activationCode, accountDTO.getFullname());
        return "User registered successfully!, Check your email to active account!";
    }

    @Value("${app.frontend_url}")
    String frontendUrl;

    @Override
    public String activate(String code, HttpServletResponse response) {
        AccountEntity accountEntity = accountRepository.findByActivationCode(code);
        if (accountEntity != null) {
            accountEntity.setIs_active(true);
            accountEntity.setActivate_code(null);
            accountRepository.save(accountEntity);
            try {
                response.sendRedirect(frontendUrl);
            } catch (IOException e) {
                e.printStackTrace();
            }
            return "Account has been activated successfully!";
        } else {
            return "Invalid activation code!";
        }
    }

    @Override
    public String createAccount(AccountDTO accountDTO) {
        String updatePhoneNumber = updatePhoneNumber(accountDTO.getPhonenumber());

        String errorMessage = checkDuplicateAccount("create", accountDTO.getId(), accountDTO.getUsername(), accountDTO.getEmail(), updatePhoneNumber);
        if (!errorMessage.isEmpty()) return errorMessage;

        RoleEntity role = roleRepository.findById(accountDTO.getRoleid()).orElseThrow(() -> new RuntimeException("Role not found"));
        String encodedPassword = passwordEncoder.encode(accountDTO.getPassword());
        String activationCode = UUID.randomUUID().toString();
        AccountEntity account = new AccountEntity(
                role,
                accountDTO.getUsername(),
                encodedPassword,
                accountDTO.getFullname(),
                accountDTO.getEmail(),
                updatePhoneNumber,
                accountDTO.getAddress(),
                true
        );
        accountRepository.save(account);
        emailService.sendAccountForAdmin(accountDTO.getEmail(), activationCode, accountDTO.getFullname(), accountDTO.getUsername(), accountDTO.getPassword());
        return account.getUsername();
    }

    @Override
    public String checkDuplicateAccount(String type, int id, String username, String email, String phoneNumber) {
        String errorMessage = "";
        boolean isUsernameExist = false, isEmailExist = false, isPhoneNumberExist = false;
        switch (type) {
            case "add", "create":
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
    public String restoreAccount(int id) {
        accountRepository.restoreAccount(id);
        return "Successful!";
    }

    @Override
    public String deleteSoftAccount(int id) {
        accountRepository.deleteSoftById(id);
        return "Delete successful";
    }

    @Override
    public ResponseEntity<?> loginAccount(LoginDTO loginDTO) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getUsername(),
                        loginDTO.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = JWTUtil.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        return ResponseEntity.ok(
                new LoginPojo(
                        jwt,
                        userDetails.getId(),
                        userDetails.getUsername(),
                        userDetails.getEmail(),
                        userDetails.getAuthorities()
                )
        );
    }

    @Override
    public ResponseEntity<?> loginGoogleAccount(GoogleLoginRequestDTO googleLoginRequestDTO) {
        AccountEntity acc = accountRepository.findByEmail(googleLoginRequestDTO.getEmail());
        RoleEntity roleEntity = roleRepository.findById(5).orElseThrow(() -> new RuntimeException("Role not found"));
        AccountEntity accountEntity = new AccountEntity();
        if (acc != null) {
            UserDetailsImpl userDetails = new UserDetailsImpl(
                acc.getId(), 
                acc.getUsername(),
                acc.getEmail(),
                acc.getPassword(),
                List.of(new SimpleGrantedAuthority(roleEntity.getName()))
            );
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                userDetails,
                userDetails.getPassword(),
                userDetails.getAuthorities()
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = JWTUtil.generateJwtToken(authentication);
            return ResponseEntity.ok(
                new LoginPojo(
                    jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail(),
                    userDetails.getAuthorities()
                )
            );
        }
            accountEntity.setRole(roleEntity); 
            accountEntity.setUsername(googleLoginRequestDTO.getName());
            accountEntity.setPassword(passwordEncoder.encode("null"));
            accountEntity.setFullname(googleLoginRequestDTO.getName());
            accountEntity.setEmail(googleLoginRequestDTO.getEmail());
            accountEntity.setIs_active(true);
            accountRepository.save(accountEntity);
            
        UserDetailsImpl userDetails = new UserDetailsImpl(
            accountEntity.getId(), 
            accountEntity.getUsername(),
            accountEntity.getEmail(),
            accountEntity.getPassword(),
            List.of(new SimpleGrantedAuthority(roleEntity.getName()))
        );
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                userDetails,
                userDetails.getPassword(),
                userDetails.getAuthorities()
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = JWTUtil.generateJwtToken(authentication);
        return ResponseEntity.ok(
            new LoginPojo(
                jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                userDetails.getAuthorities()
            )
        );
    }

    @Override
    public ResponseEntity<?> forgotPassword(ForgetPasswordDTO forgetPasswordDTO) {
        AccountEntity accountEntity = accountRepository.findByUsernameAndEmail(forgetPasswordDTO.getUsername(), forgetPasswordDTO.getEmail());

        if (accountEntity == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email or Username not found");
        }

        String token = JWTUtil.generateResetToken(accountEntity.getUsername());
        emailService.sendForgetTokenEmail(accountEntity.getEmail(), token, accountEntity.getFullname());

        return ResponseEntity.ok("Reset password email sent");
    }


    @Override
    public ResponseEntity<?> resetPassword(ResetPasswordRequestDTO resetPasswordRequestDTO, HttpServletResponse response) {
        try {
            response.sendRedirect(frontendUrl + "/reset-password");
        } catch (IOException e) {
            e.printStackTrace();
        }
        String token = resetPasswordRequestDTO.getToken();
        String oldPassword = resetPasswordRequestDTO.getOldPassword();
        String newPassword = resetPasswordRequestDTO.getNewPassword();

        if (!JWTUtil.validateJwtToken(token)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid token");
        }

        String username = JWTUtil.getUserNameFromJwtToken(token);
        AccountEntity accountEntity = accountRepository.findByUserName(username);
        if (accountEntity == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found!");
        }
        if (!accountEntity.getPassword().equals(oldPassword)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Password is incorrect!");
        }
        accountEntity.setPassword(passwordEncoder.encode(newPassword));
        accountRepository.save(accountEntity);
        return ResponseEntity.ok("Password updated successfully");
    }

    @Override
    public ResponseEntity<?> resetForgetPassword(ResetPasswordRequestDTO resetPasswordRequestDTO) {
        String token = resetPasswordRequestDTO.getToken();
        String newPassword = resetPasswordRequestDTO.getNewPassword();

        if (!JWTUtil.validateJwtToken(token)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid token");
        }

        String username = JWTUtil.getUserNameFromJwtToken(token);
        AccountEntity accountEntity = accountRepository.findByUserName(username);
        if (accountEntity == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found!");
        }
        accountEntity.setPassword(passwordEncoder.encode(newPassword));
        accountRepository.save(accountEntity);
        return ResponseEntity.ok("Password updated successfully");
    }

    @Override
    public String updatePhoneNumber(String phoneNumber) {
        if (phoneNumber.length() == 9 && !phoneNumber.startsWith("0")) {
            phoneNumber = "0" + phoneNumber;
        }
        return phoneNumber;
    }

    @Override
    public String deleteHardAccount(int id) {
        accountRepository.deleteHardById(id);
        return "Successful";
    }

    @Override
    public Page<AccountEntity> getAllDeletedAccountsById(String search, int pageId, String filter) {
        int pageSize = 5;
        int pageNumber = --pageId;
        if (search.isEmpty() && filter.isEmpty())
            return accountRepository.findAllByisActive(PageRequest.of(pageNumber, pageSize, Sort.by("role")));
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
        return accountRepository.findAllByisActive(PageRequest.of(pageNumber, pageSize, Sort.by("role")));
    }
}
