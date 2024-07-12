package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.CommitmentLetterEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommitmentRepository extends JpaRepository<CommitmentLetterEntity, Integer> {

    @Query("SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.CommitmentPojo(" +
            "c.id," +
            "c.createdDate," +
            "c.valuationRequest.id," +
            "c.valuationRequest.pendingRequestId.customerId.fullname," +
            "c.valuationRequest.paymentId.id," +
            "c.valuationRequest.paymentId.createdDate," +
            "c.valuationRequest.paymentId.bank," +
            "c.valuationRequest.paymentId.amount," +
            "c.valuationRequest.paymentId.transaction," +
            "c.valuationRequest.paymentId.orderInfo, c.valuationRequest.paymentId.createdDate) " +
            "FROM CommitmentLetterEntity as c")
    Page<CommitmentLetterEntity> findAll(Pageable pageable);

    @Query("SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.CommitmentPojo(" +
            "c.id," +
            "c.createdDate," +
            "c.valuationRequest.id," +
            "c.valuationRequest.pendingRequestId.customerId.fullname," +
            "c.valuationRequest.paymentId.id," +
            "c.valuationRequest.paymentId.createdDate," +
            "c.valuationRequest.paymentId.bank," +
            "c.valuationRequest.paymentId.amount," +
            "c.valuationRequest.paymentId.transaction," +
            "c.valuationRequest.paymentId.orderInfo, c.valuationRequest.paymentId.createdDate) " +
            "FROM CommitmentLetterEntity as c " +
            "WHERE c.valuationRequest.pendingRequestId.customerId.id=:customerId")
    Page<CommitmentLetterEntity> findAllByCustomerId(Pageable pageable, @Param("customerId") int customerId);

    @Query("SELECT c FROM CommitmentLetterEntity c WHERE c.valuationRequest.id=:id")
    Optional<CommitmentLetterEntity> findByValuationRequestId(@Param("id") Integer id);
}
