package com.diamond_shop.diamond_shop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PaymentEntity;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentEntity, Integer>{
    @Query(value = "SELECT a FROM AccountEntity a WHERE a.username=:username")
    AccountEntity findByUsername(@Param("username") String username);
//
//    @Query(value = "SELECT v FROM ValuationRequestEntity v WHERE v.id=:id")
//    ValuationRequestEntity findByValuationRequest(@Param("id") int id);
    @Query(value = "SELECT a FROM PaymentEntity a WHERE a.customerId.id=:customerId")
    List<PaymentEntity> findByCustomerId(@Param("customerId") int customerId);
}
