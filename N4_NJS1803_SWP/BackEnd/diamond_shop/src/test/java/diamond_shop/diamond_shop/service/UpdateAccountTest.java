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

public class UpdateAccountTest {

    @Mock
    private AccountRepository accountRepository;

    @InjectMocks
    private AccountImpl accountService;

    @BeforeEach
    void setUp()  {
        MockitoAnnotations.openMocks(this);
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
}
