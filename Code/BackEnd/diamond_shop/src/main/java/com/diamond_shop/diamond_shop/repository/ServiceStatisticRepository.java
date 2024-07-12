package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ServiceStatisticEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceStatisticRepository extends JpaRepository<ServiceStatisticEntity, Integer> {
    @Modifying
    @Transactional
    @Query("UPDATE ServiceStatisticEntity s SET s.name=:name WHERE s.id=:id")
    void updateStatistic(@Param("id") int id, @Param("name") String name);
}
