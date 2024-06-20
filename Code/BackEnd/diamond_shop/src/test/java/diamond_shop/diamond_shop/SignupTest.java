package diamond_shop.diamond_shop;


import com.diamond_shop.diamond_shop.DiamondShopApplication;
import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest(classes = DiamondShopApplication.class)
@EnableAutoConfiguration
public class SignupTest {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AccountRepository accountRepository;


//    @Test
//    public void addAccount() {
//        AccountDTO accountDTO = new AccountDTO("t22hrt6767", "Lam Tien th5663Hung", "832248379","1am4tien1hun");
//        String updatePhoneNumber = updatePhoneNumber(accountDTO.getPhonenumber());
//
//        String errorMessage = checkDuplicateAccount("add", accountDTO.getId(), accountDTO.getUsername(), "", updatePhoneNumber);
//        Assert.assertEquals(null, errorMessage);
//
//        RoleEntity role = roleRepository.findById(5).orElseThrow(() -> new RuntimeException("Role not found"));
//        String encodedPassword = passwordEncoder.encode(accountDTO.getPassword());
//        AccountEntity account = new AccountEntity(role, accountDTO.getUsername(), encodedPassword, accountDTO.getFullname(), updatePhoneNumber);
//       Assert.assertNotEquals( null,accountRepository.save(account));
//    }

    public String updatePhoneNumber(String phoneNumber) {
        if (phoneNumber.length() == 9 && !phoneNumber.startsWith("0")) {
            phoneNumber = "0" + phoneNumber;
        }
        return phoneNumber;
    }

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
}
