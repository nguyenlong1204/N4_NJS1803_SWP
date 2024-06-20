package diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.service.AccountImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class DeleteAccountTest {

    @Mock
    private AccountRepository accountRepository;

    @InjectMocks
    private AccountImpl accountService;

    @BeforeEach
    void setUp()  {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testDeleteAccount() {
        int id = 1;

        accountService.deleteAccount(id);

        verify(accountRepository, times(1)).deleteById(id);
    }
}
