package com.diamond_shop.diamond_shop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;

@Repository
public interface ProcessRequestRepository extends JpaRepository<ProcessRequestEntity, Integer>{
    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id = :staffId AND p.valuationRequestId.id = :valuationRequestId")
    Optional<ProcessRequestEntity> findByStaffIdAndValuationRequestId(@Param("staffId") int staffId, @Param("valuationRequestId") int valuationRequestId);
}
