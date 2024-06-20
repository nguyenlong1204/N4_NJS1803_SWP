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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class AccountServiceTest {

    @Mock
    private AccountRepository accountRepository;

    @Mock
    private RoleRepository roleRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private AccountImpl accountService;

    @BeforeEach
    void setUp()  {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllAccount() {
        AccountEntity account1 = new AccountEntity();
        AccountEntity account2 = new AccountEntity();
        List<AccountEntity> accounts = Arrays.asList(account1, account2);
        when(accountRepository.getAllAccounts()).thenReturn(accounts);

        List<AccountEntity> result = accountService.getAllAccounts();

        assertEquals(2, result.size());
        verify(accountRepository, times(1)).getAllAccounts();
    }

    @Test
    void testGetAllAccountsById() {
        AccountEntity account1 = new AccountEntity();
        AccountEntity account2 = new AccountEntity();
        Page<AccountEntity> accounts = new PageImpl<>(Arrays.asList(account1, account2));
        when(accountRepository.findAll(any(PageRequest.class))).thenReturn(accounts);

        Page<AccountEntity> result = accountService.getAllAccountsById(1);

        assertEquals(2, result.getContent().size());
        verify(accountRepository, times(1)).findAll(any(PageRequest.class));
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

    @Test
    void testUpdateAccount() {
        int id = 1;
        int role = 2;
        String fullname = "Updated Name";
        String email = "updated@example.com";
        String phonenumber = "111222333";
        String address = "Updated Address";

        accountService.updateAccount(id, role, fullname, email, phonenumber, address);

        verify(accountRepository, times(1)).updateAccountInfoById(id, role, fullname, email, phonenumber, address);
    }

    @Test
    void testDeleteAccount() {
        int id = 1;

        accountService.deleteAccount(id);

        verify(accountRepository, times(1)).deleteById(id);
    }
}
