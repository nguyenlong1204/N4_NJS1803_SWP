package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer>, PagingAndSortingRepository<AccountEntity, Integer> {

    @Query(value = "SELECT a FROM AccountEntity a")
    List<AccountEntity> getAllAccounts();

    Page<AccountEntity> findAll(Pageable pageable);

    @Query("SELECT a FROM AccountEntity a WHERE a.username = :userName")
    AccountEntity findByUserName(@Param("userName") String userName);

    @Query("SELECT a FROM AccountEntity a WHERE a.username = :userName AND a.password = :password")
    Optional<AccountEntity> findOneByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);

    @Modifying
    @Transactional
    @Query("UPDATE AccountEntity a SET a.role.Id=:Role_id, a.fullname=:fullName, a.email=:email, a.phone_number=:phoneNumber, a.address=:address WHERE a.id=:id")
    void updateAccountInfoById(@Param("id") int id, @Param("Role_id") int Role_id, @Param("fullName") String fullName, @Param("email") String email, @Param("phoneNumber") String phoneNumber, @Param("address") String address);

    void deleteById(int id);

    @Query("SELECT a FROM AccountEntity a WHERE a.role = :Role_id")
    List<AccountEntity> findAllByRoleId(@Param("Role_id") RoleEntity Role_id);
}
