package diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.AccountDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.RoleRepository;
import com.diamond_shop.diamond_shop.service.AccountImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class CreateAccountTest {

    @Mock
    private AccountRepository accountRepository;

    @Mock
    private RoleRepository roleRepository;

    @InjectMocks
    private AccountImpl accountService;

    @BeforeEach
    void setUp()  {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateAccount() {
        AccountDTO accountDTO = new AccountDTO();
        accountDTO.setRoleid(5);
        accountDTO.setUsername("user2");
        accountDTO.setPassword("password2");
        accountDTO.setFullname("User Two");
        accountDTO.setEmail("user2@example.com");
        accountDTO.setPhonenumber("987654321");
        accountDTO.setAddress("Address 2");
        RoleEntity role = new RoleEntity();
        role.setId(5);
        when(roleRepository.findById(5)).thenReturn(Optional.of(role));
        when(accountRepository.save(any(AccountEntity.class))).thenAnswer(i -> i.getArgument(0));


        accountService.createAccount(accountDTO);


        verify(accountRepository, times(1)).save(any(AccountEntity.class));
    }

}
