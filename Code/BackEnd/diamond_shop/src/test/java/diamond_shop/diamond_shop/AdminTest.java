//package diamond_shop.diamond_shop;
//
//import com.diamond_shop.diamond_shop.DiamondShopApplication;
//import com.diamond_shop.diamond_shop.dto.AccountDTO;
//import com.diamond_shop.diamond_shop.entity.AccountEntity;
//import com.diamond_shop.diamond_shop.entity.RoleEntity;
//import com.diamond_shop.diamond_shop.repository.AccountRepository;
//import com.diamond_shop.diamond_shop.repository.RoleRepository;
//import com.diamond_shop.diamond_shop.service.AccountService;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.params.ParameterizedTest;
//import org.junit.jupiter.params.provider.CsvFileSource;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@SpringBootTest(classes = DiamondShopApplication.class)
//@EnableAutoConfiguration
//public class AdminTest {
//
//    @Autowired
//    AccountRepository accountRepository;
//    @Autowired
//    AccountService accountService;
//    @Autowired
//    private RoleRepository roleRepository;
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @ParameterizedTest
//    @CsvFileSource(resources = "/adminCreateAccount.csv", numLinesToSkip = 1)
//    public void createAccount(int roleid, String username, String fullname, String email, String phonenumber, String password, String address) {
//        AccountDTO account = new AccountDTO(roleid, username, fullname, email, phonenumber, password, address);
//        String updatePhoneNumber = accountService.updatePhoneNumber(account.getPhonenumber());
//        String errorMessage = accountService.checkDuplicateAccount("create", account.getId(), account.getUsername(), account.getEmail(), updatePhoneNumber);
//        Assertions.assertNotNull(errorMessage);
//        RoleEntity role = roleRepository.findById(account.getRoleid()).orElseThrow(() -> new RuntimeException("Role not found"));
//        String encodedPassword = passwordEncoder.encode(account.getPassword());
//        AccountEntity accountEntity = new AccountEntity(role, account.getUsername(), encodedPassword, account.getFullname(), account.getEmail(), updatePhoneNumber, account.getAddress());
//        Assertions.assertNotNull(accountEntity);
//    }
//
//    @ParameterizedTest
//    @CsvFileSource()
//    public void updateAccount(int roleid, String username, String fullname, String email, String phonenumber, String password, String address) {
//
//    }
//
//
//}
