package com.diamond_shop.diamond_shop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.WalletsEntity;


@Repository
public interface WalletsRepository extends JpaRepository<WalletsEntity, Integer>{
    @Query("SELECT w FROM WalletsEntity w WHERE w.customer_id = :customer_id")
    Optional<WalletsEntity> findByCustomer_id(@Param("customer_id") Integer customer_id);
}
