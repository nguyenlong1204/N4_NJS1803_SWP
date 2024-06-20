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
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer>, PagingAndSortingRepository<AccountEntity, Integer> {

    @Query(value = "SELECT a FROM AccountEntity a")
    List<AccountEntity> getAllAccounts();

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
            "FROM AccountEntity as a")
    Page<AccountEntity> findAll(Pageable pageable);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
            "FROM AccountEntity as a " +
            "WHERE a.fullname " +
            "LIKE lower(concat(:search,'%')) OR a.email " +
            "LIKE lower(concat(:search,'%')) OR a.phone_number " +
            "LIKE lower(concat(:search,'%'))")
    Page<AccountEntity> searchNonFilter(Pageable pageable, String search);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
            "FROM AccountEntity as a " +
            "WHERE a.fullname " +
            "LIKE lower(concat(:search,'%'))")
    Page<AccountEntity> searchFullName(Pageable pageable, String search);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
            "FROM AccountEntity as a " +
            "WHERE a.email " +
            "LIKE lower(concat(:search,'%'))")
    Page<AccountEntity> searchEmail(Pageable pageable, String search);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
            "FROM AccountEntity as a " +
            "WHERE a.phone_number " +
            "LIKE lower(concat(:search,'%'))")
    Page<AccountEntity> searchPhoneNumber(Pageable pageable, String search);

    @Query("SELECT a FROM AccountEntity a WHERE a.username = :userName")
    AccountEntity findByUserName(@Param("userName") String userName);

    @Query("SELECT a FROM AccountEntity a WHERE a.id = :id")
    Optional<AccountEntity> findById(@Param("id") Long userId);

    @Query("SELECT a FROM AccountEntity a WHERE a.phone_number=:phone_number")
    AccountEntity findByPhoneNumber(@Param("phone_number") String phone_number);

    @Query("SELECT a FROM AccountEntity a WHERE a.email=:email")
    AccountEntity findByEmail(@Param("email") String email);

    @Query("SELECT a FROM AccountEntity a WHERE a.username = :userName AND a.password = :password")
    Optional<AccountEntity> findOneByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);

    @Query("SELECT a FROM AccountEntity a WHERE a.username=:username")
    List<AccountEntity> findByUsername(@Param("username") String username);

    @Modifying
    @Transactional
    @Query("UPDATE AccountEntity a SET a.role.id=:Role_id, a.fullname=:fullName, a.email=:email, a.phone_number=:phoneNumber, a.address=:address WHERE a.id=:id")
    void updateAccountInfoById(@Param("id") int id, @Param("Role_id") int Role_id, @Param("fullName") String fullName, @Param("email") String email, @Param("phoneNumber") String phoneNumber, @Param("address") String address);

    void deleteById(int id);

    @Query("SELECT a FROM AccountEntity a WHERE a.role = :Role_id")
    List<AccountEntity> findAllByRoleId(@Param("Role_id") RoleEntity Role_id);

    @Query("SELECT a FROM AccountEntity a WHERE a.role.id=:id")
    AccountEntity findByRoleId(@Param("id") int id);

    @Query("SELECT a1 " +
            "FROM AccountEntity a1 " +
            "WHERE a1.role.id=:roleId " +
            "EXCEPT " +
            "SELECT a2 " +
            "FROM AccountEntity a2 " +
            "WHERE a2.id=:staffId")
    List<AccountEntity> findExceptById(@Param("roleId") int roleId, @Param("staffId") int staffId);

}
