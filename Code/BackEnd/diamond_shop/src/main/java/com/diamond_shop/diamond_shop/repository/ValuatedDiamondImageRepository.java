package com.diamond_shop.diamond_shop.repository;


import com.diamond_shop.diamond_shop.entity.ValuatedDiamondEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValuatedDiamondImageRepository extends JpaRepository<ValuatedDiamondEntity, String> {
}
