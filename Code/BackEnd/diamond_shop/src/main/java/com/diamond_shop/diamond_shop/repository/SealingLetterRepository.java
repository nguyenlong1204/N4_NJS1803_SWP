package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SealingLetterRepository extends JpaRepository<SealingLetterEntity, Integer> {

    @Query(value = "SELECT s " +
            "FROM SealingLetterEntity s " +
            "WHERE s.valuationRequest.id=:id")
    Optional<SealingLetterEntity> findByValuationRequestId(@Param("id") int id);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.SealingLetterPojo (" +
            "s.id," +
            "s.createdDate," +
            "s.content," +
            "s.valuationRequest.id," +
            "s.valuationRequest.pendingRequestId.customerId.fullname," +
            "s.valuationRequest.createdDate," +
            "s.valuationRequest.finishDate," +
            "s.valuationRequest.sealingDate) " +
            "FROM SealingLetterEntity as s")
    Page<SealingLetterEntity> findAll(Pageable pageable);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.SealingLetterPojo (" +
            "s.id," +
            "s.createdDate," +
            "s.content," +
            "s.valuationRequest.id," +
            "s.valuationRequest.pendingRequestId.customerId.fullname," +
            "s.valuationRequest.createdDate," +
            "s.valuationRequest.finishDate," +
            "s.valuationRequest.sealingDate) " +
            "FROM SealingLetterEntity as s " +
            "WHERE s.valuationRequest.pendingRequestId.customerId.id=:customerId")
    Page<SealingLetterEntity> findAllByCustomerId(Pageable pageable,@Param("customerId")int customerId);
}
