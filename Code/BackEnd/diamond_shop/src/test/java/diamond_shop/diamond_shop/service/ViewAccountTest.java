package diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.service.AccountImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ViewAccountTest {

    @Mock
    private AccountRepository accountRepository;

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
}
