package com.diamond_shop.diamond_shop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;


@Repository
public interface ProcessResultRepository extends JpaRepository<ProcessResultEntity, Integer>{
    // @Query("SELECT p FROM ProcessResultEntity p WHERE p.valuationStaffId.id = :staffId AND p.ProcessRequestId.id = :processRequestId")
    // Optional<ProcessResultEntity> findByStaffIdAndProcessRequestId(@Param("staffId") int staffId, @Param("processRequestId") int processRequestId);

    @Query("SELECT p FROM ProcessResultEntity p WHERE p.ProcessRequestId.id = :processRequestId")
    Optional<ProcessResultEntity> findByProcessRequestId(@Param("processRequestId") int processRequestId);

    @Query(value = "SELECT COUNT (p.valuationStaffId) FROM ProcessResultEntity p WHERE p.valuationStaffId.id=:staffId")
    long countByStaffId(@Param("staffId") int staffId);
}
