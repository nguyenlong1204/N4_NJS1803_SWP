package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ServiceEntity;
import com.diamond_shop.diamond_shop.pojo.ServiceResultPojo;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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
            "s.statistic_id.id," +
            "s.statistic_id.name) " +
            "FROM ServiceEntity as s")
    List<ServiceResultPojo> getAllServices();

    @Modifying
    @Transactional
    @Query("UPDATE ServiceEntity s " +
            "SET s.name=:name,s.price=:price, s.time=:time " +
            "WHERE s.id=:id")
    void updateServiceById(@Param("id") int id, @Param("name") String name, @Param("price") int price, @Param("time") int time);
}
