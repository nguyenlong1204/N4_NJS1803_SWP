package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import com.diamond_shop.diamond_shop.pojo.ServiceResultPojo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity, Integer> {

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ServiceResultPojo(" +
            "s.id, " +
            "s.name, " +
            "s.price, " +
            "s.time, " +
            "s.statistic_id.name) " +
            "FROM ServiceEntity as s")
    List<ServiceResultPojo> getAllServices();
}
