//package diamond_shop.diamond_shop;
//
//
//import com.diamond_shop.diamond_shop.DiamondShopApplication;
//import com.diamond_shop.diamond_shop.dto.LoginDTO;
//import com.diamond_shop.diamond_shop.entity.AccountEntity;
//import com.diamond_shop.diamond_shop.repository.AccountRepository;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.params.ParameterizedTest;
//import org.junit.jupiter.params.provider.CsvFileSource;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//
//@SpringBootTest(classes = DiamondShopApplication.class)
//@EnableAutoConfiguration
//public class LoginTest {
//    @Autowired
//    PasswordEncoder passwordEncoder;
//    @Autowired
//    AccountRepository accountRepository;
//
//    @ParameterizedTest
//    @CsvFileSource(resources = "/loginTest.csv", numLinesToSkip = 1)
//    public void loginAccountTest(String username, String password) {
//        LoginDTO loginDTO = new LoginDTO(username, password);
//        AccountEntity acc1 = accountRepository.findByUserName(loginDTO.getUsername());
//        Assertions.assertNotNull(acc1);
//        if (acc1 != null) {
//            password = logQinDTO.getPassword();
//            String encodedPassword = acc1.getPassword();
//            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
//            Assertions.assertTrue(isPwdRight);
//        }
//    }
//}
