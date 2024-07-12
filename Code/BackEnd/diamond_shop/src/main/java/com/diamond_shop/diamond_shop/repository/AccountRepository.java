package com.diamond_shop.diamond_shop.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.RoleEntity;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {

        @Query(value = "SELECT a FROM AccountEntity a")
        List<AccountEntity> getAllAccounts();

        @Query(value = "SELECT " +
                "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
                "FROM AccountEntity as a WHERE a.is_active = true")
        Page<AccountEntity> findAll(Pageable pageable);

        @Query(value = "SELECT " +
        "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
        "FROM AccountEntity as a WHERE a.is_active = false")
        Page<AccountEntity> findAllByisActive(Pageable pageable);

        @Query(value = "SELECT " +
                "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
                "FROM AccountEntity as a " +
                "WHERE a.is_active = true AND (a.fullname " +
                "LIKE lower(concat(:search,'%')) OR a.email " +
                "LIKE lower(concat(:search,'%')) OR a.phone_number " +
                "LIKE lower(concat(:search,'%')))")
        Page<AccountEntity> searchNonFilter(Pageable pageable, String search);

        @Query(value = "SELECT " +
                "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
                "FROM AccountEntity as a " +
                "WHERE a.is_active = true AND a.fullname " +
                "LIKE lower(concat(:search,'%'))")
        Page<AccountEntity> searchFullName(Pageable pageable, String search);

        @Query(value = "SELECT " +
                "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
                "FROM AccountEntity as a " +
                "WHERE a.is_active = true AND a.email " +
                "LIKE lower(concat(:search,'%'))")
        Page<AccountEntity> searchEmail(Pageable pageable, String search);


        @Query(value = "SELECT " +
                "NEW com.diamond_shop.diamond_shop.pojo.AdminResultPojo(a.id,a.role.id, a.role.name, a.username, a.fullname, a.email, a.phone_number,a.address) " +
                "FROM AccountEntity as a " +
                "WHERE a.is_active = true AND a.phone_number " +
                "LIKE lower(concat(:search,'%'))")
        Page<AccountEntity> searchPhoneNumber(Pageable pageable, String search);


        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.username = :userName")
        AccountEntity findByUserName(@Param("userName") String userName);

        @Query("SELECT a FROM AccountEntity a WHERE  a.is_active = true AND a.id = :id")
        Optional<AccountEntity> findById(@Param("id") Long userId);

        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.phone_number=:phone_number")
        AccountEntity findByPhoneNumber(@Param("phone_number") String phone_number);
        
        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = false AND a.activate_code=:activate_code")
        AccountEntity findByActivationCode(@Param("activate_code") String activate_code);

        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.email=:email")
        AccountEntity findByEmail(@Param("email") String email);

        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.username = :userName AND a.password = :password")
        Optional<AccountEntity> findOneByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);

        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.username=:username")
        List<AccountEntity> findByUsername(@Param("username") String username);        

        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.email=:email AND a.username=:username")
        AccountEntity findByUsernameAndEmail(@Param("username") String username, @Param("email") String email);

        @Modifying
        @Transactional
        @Query("UPDATE AccountEntity a SET a.role.id=:Role_id, a.fullname=:fullName, a.email=:email, a.phone_number=:phoneNumber, a.address=:address WHERE a.id=:id")
        void updateAccountInfoById(@Param("id") int id, @Param("Role_id") int Role_id, @Param("fullName") String fullName, @Param("email") String email, @Param("phoneNumber") String phoneNumber, @Param("address") String address);

        @Modifying
        @Transactional
        @Query("UPDATE AccountEntity a SET a.is_active=false WHERE a.id=:id")
        void deleteSoftById(@Param("id") int id);

        @Modifying
        @Transactional
        @Query("DELETE FROM AccountEntity a WHERE a.id = :id")
        void deleteHardById(@Param("id") int id);

        @Modifying
        @Transactional
        @Query("UPDATE AccountEntity a SET a.is_active=true WHERE a.id=:id")
        void restoreAccount(@Param("id") int id);

        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.role = :Role_id")
        List<AccountEntity> findAllByRoleId(@Param("Role_id") RoleEntity Role_id);

        @Query("SELECT a FROM AccountEntity a WHERE a.is_active = true AND a.role.id=:id")
        AccountEntity findByRoleId(@Param("id") int id);

        @Query("SELECT a1 " +
                "FROM AccountEntity a1 " +
                "WHERE a1.is_active = true AND a1.role.id=:roleId " +
                "EXCEPT " +
                "SELECT a2 " +
                "FROM AccountEntity a2 " +
                "WHERE a2.is_active = true AND a2.id=:staffId")
        List<AccountEntity> findExceptById(@Param("roleId") int roleId, @Param("staffId") int staffId);


}
