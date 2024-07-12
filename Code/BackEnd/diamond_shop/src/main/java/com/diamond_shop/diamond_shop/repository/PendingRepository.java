package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PendingRepository extends JpaRepository<PendingRequestsEntity, Integer> {
    @Query("SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.PendingRequestPojo(" +
            "p.id," +
            "p.createdDate," +
            "p.description," +
            "p.customerId.id," +
            "p.customerId.fullname," +
            "p.customerId.email," +
            "p.customerId.phone_number) " +
            "FROM PendingRequestsEntity as p " +
            "WHERE p.customerId.is_active=true AND p.id " +
            "NOT IN ( " +
            "SELECT pe.id " +
            "FROM PendingRequestsEntity pe " +
            "INNER JOIN ProcessRequestEntity pr " +
            "ON pe.id=pr.pendingRequestId.id)")
    Page<PendingRequestsEntity> findAllPendingRequests(Pageable pageable);

    @Query("SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.PendingRequestPojo(" +
            "p.id," +
            "p.createdDate," +
            "p.description," +
            "p.customerId.id," +
            "p.customerId.fullname," +
            "p.customerId.email," +
            "p.customerId.phone_number) " +
            "FROM PendingRequestsEntity as p " +
            "WHERE p.customerId.is_active=true AND p.customerId.id=:customerId " +
            "AND p.id NOT IN ( " +
            " SELECT pe.id " +
            "FROM PendingRequestsEntity pe " +
            "INNER JOIN ProcessRequestEntity pr " +
            "ON pe.id=pr.pendingRequestId.id" +
            ")")
    Page<PendingRequestsEntity> findAllByCustomerId(Pageable pageable, @Param("customerId") int customerId);

    @Query("SELECT p " +
            "FROM PendingRequestsEntity p " +
            "WHERE p.customerId.is_active=true AND p.customerId.id=:customerId " +
            "AND p.id " +
            "NOT IN " +
            "(SELECT pe.id " +
            "FROM PendingRequestsEntity pe " +
            "INNER JOIN ProcessRequestEntity pr " +
            "ON pe.id=pr.pendingRequestId.id)")
    List<PendingRequestsEntity> findByCustomerId(@Param("customerId") int customerId);

}
