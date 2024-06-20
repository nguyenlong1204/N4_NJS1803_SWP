package com.diamond_shop.diamond_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;

@Repository
public interface ValuationRequestRepository extends JpaRepository<ValuationRequestEntity, Integer>{

}
