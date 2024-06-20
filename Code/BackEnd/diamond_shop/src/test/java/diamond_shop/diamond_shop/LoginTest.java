package diamond_shop.diamond_shop;


import com.diamond_shop.diamond_shop.DiamondShopApplication;
import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;


@SpringBootTest(classes = DiamondShopApplication.class)
@EnableAutoConfiguration
public class LoginTest {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AccountRepository accountRepository;

    //    @Test
    //    public void loginAccountTest() {
    //        LoginDTO loginDTO = new LoginDTO("lthung60412", "1am4tien1hunG2#");
    //        AccountEntity acc1 = accountRepository.findByUserName(loginDTO.getUsername());
    //
    //        if (acc1 != null) {
    //            String password = loginDTO.getPassword();
    //            String encodedPassword = acc1.getPassword();
    //            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
    //            if (isPwdRight) {
    //                Optional<AccountEntity> account = accountRepository.findOneByUserNameAndPassword(loginDTO.getUsername(), encodedPassword);
    //            }
    //        }
    //    }
}
