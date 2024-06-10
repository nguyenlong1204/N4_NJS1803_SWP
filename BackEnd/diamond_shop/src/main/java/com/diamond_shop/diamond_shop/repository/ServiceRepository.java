package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity,Integer> {
    @Query(value = "SELECT s FROM ServiceEntity s")
    List<ServiceEntity> getAllServices();
}
