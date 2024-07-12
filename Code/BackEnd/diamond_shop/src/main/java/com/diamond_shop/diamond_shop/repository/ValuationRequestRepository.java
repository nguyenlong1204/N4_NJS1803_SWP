package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ValuationRequestRepository extends JpaRepository<ValuationRequestEntity, Integer> {


    @Query("SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ValuationRequestPojo(" +
            "v.id," +
            "v.serviceId.name, " +
            "v.serviceId.price," +
            "v.serviceId.statistic_id.name," +
            "v.createdDate," +
            "v.finishDate," +
            "v.sealingDate) " +
            "FROM ValuationRequestEntity as v " +
            "WHERE v.pendingRequestId.id=:pendingRequestId")
    Optional<ValuationRequestEntity> findByPendingRequestId(@Param("pendingRequestId") int pendingRequestId);

    @Query("SELECT v FROM ValuationRequestEntity v WHERE v.pendingRequestId.processRequestEntity.id=:processRequestId")
    Optional<ValuationRequestEntity> findByProcessRequestId(@Param("processRequestId") int processRequestId);
}
