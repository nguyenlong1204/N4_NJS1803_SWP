package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ValuationReceiptEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ValuationReceiptRepository extends JpaRepository<ValuationReceiptEntity, Integer> {
    Page<ValuationReceiptEntity> findAll(Pageable pageable);

    @Query("SELECT v FROM ValuationReceiptEntity v WHERE v.valuationRequestId.id=:id")
    ValuationReceiptEntity findByValuationRequestId(@Param("id") int id);
}
