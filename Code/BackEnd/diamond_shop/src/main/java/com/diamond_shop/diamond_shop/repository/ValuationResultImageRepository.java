package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ValuationResultImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ValuationResultImageRepository extends JpaRepository<ValuationResultImageEntity, String> {

    @Query("SELECT v.id FROM ValuationResultImageEntity v WHERE v.valuationResult.id=:id")
    List<String> findImageIdsByValuationResultId(@Param("id") String id);

}
