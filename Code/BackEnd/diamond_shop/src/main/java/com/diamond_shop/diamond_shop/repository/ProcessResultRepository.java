package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ProcessResultEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface ProcessResultRepository extends JpaRepository<ProcessResultEntity, Integer> {

    @Query(value = "SELECT COUNT (p.valuationStaffId) " +
            "FROM ProcessResultEntity p " +
            "WHERE p.valuationStaffId.id=:staffId")
    long countByStaffId(@Param("staffId") int staffId);

    //
    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ProcessResultPojo(" +
            "p.valuationResultId.id," +
            "p.valuationStaffId.fullname," +
            "p.valuationResultId.valuationRequestId.serviceId.name, " +
            "p.valuationResultId.valuationRequestId.serviceId.statistic_id.name," +
            "p.status," +
            "p.valuationResultId.origin," +
            "p.valuationResultId.shape," +
            "p.valuationResultId.carat," +
            "p.valuationResultId.color," +
            "p.valuationResultId.cut," +
            "p.valuationResultId.clarity," +
            "p.valuationResultId.symmetry," +
            "p.valuationResultId.polish," +
            "p.valuationResultId.fluorescence," +
            "p.valuationResultId.measurements," +
            "p.valuationResultId.diamondTable," +
            "p.valuationResultId.depth," +
            "p.valuationResultId.lengthToWidthRatio," +
            "p.valuationResultId.price)" +
            "FROM ProcessResultEntity as p " +
            "WHERE p.valuationStaffId.id=:valuationStaffId")
    Page<ProcessResultEntity> findAllByValuationStaffId(Pageable pageable, @Param("valuationStaffId") int valuationStaffId);

    @Query("SELECT p FROM ProcessResultEntity p WHERE p.valuationResultId.id=:id")
    ProcessResultEntity findByValuationResultId(@Param("id") String id);
}
