package diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.service.AccountImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ViewAccountByIDTest {

    @Mock
    private AccountRepository accountRepository;

    @InjectMocks
    private AccountImpl accountService;

    @BeforeEach
    void setUp()  {
        MockitoAnnotations.openMocks(this);
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
}
