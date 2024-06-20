package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ValuationResultRepository extends JpaRepository<ValuationResultEntity, Integer> {

    @Query("SELECT p FROM ValuationResultEntity p WHERE p.id=:id")
    ValuationResultEntity findById(@Param("id") int id);

    @Query("SELECT p FROM ValuationResultEntity p WHERE p.valuationRequestId.id = :valuationRequestId")
    ValuationResultEntity findByValuationRequestId(@Param("valuationRequestId") int valuationRequestId);

    @Modifying
    @Query("DELETE FROM ValuationResultEntity v WHERE v.id IN :ids")
    void deleteByIds(@Param("ids") List<Integer> ids);
}
