package diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.LoginDTO;
import com.diamond_shop.diamond_shop.dto.LoginMessageDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.service.AccountImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class LoginFailPassWrongTest {
    @Mock
    private AccountRepository accountRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private AccountImpl accountService;

    @BeforeEach
    void setUp()  {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testLoginUSWrong() {
        LoginDTO loginDTO = new LoginDTO();
        loginDTO.setUsername("user1");
        loginDTO.setPassword("password1");

        AccountEntity account = new AccountEntity();
        account.setId(1);
        account.setUsername("user1");
        account.setPassword("encodedPassword");
        account.setFullname("User One");
        account.setPhone_number("123456789");

        when(accountRepository.findByUserName("user1")).thenReturn(account);
        when(passwordEncoder.matches("password", "encodedPassword")).thenReturn(true);
        when(accountRepository.findOneByUserNameAndPassword("user", "encodedPassword")).thenReturn(Optional.of(account));

        LoginMessageDTO result = accountService.loginAccount(loginDTO);


        assertEquals("password Not Match", result.getMessage());
        assertEquals(false, result.getStatus());
        verify(accountRepository, times(1)).findByUserName("user1");
        verify(passwordEncoder, times(1)).matches("password1", "encodedPassword");
    }
}
