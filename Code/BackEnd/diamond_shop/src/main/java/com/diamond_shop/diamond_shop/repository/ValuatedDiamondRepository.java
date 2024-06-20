package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ValuatedDiamondEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ValuatedDiamondRepository extends JpaRepository<ValuatedDiamondEntity, String>, PagingAndSortingRepository<ValuatedDiamondEntity, String> {

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ValuatedDiamondPojo(v.id,v.createdDate,v.valuationResult.origin,v.valuationResult.shape,v.valuationResult.carat_weight,v.valuationResult.color, v.valuationResult.cut,v.valuationResult.clarity,v.valuationResult.measurements,v.valuationResult.polish, v.valuationResult.symmetry, v.valuationResult.fluorescence,v.valuationResult.proportions,v.valuationResult.price)" +
            "FROM ValuatedDiamondEntity as v")
    Page<ValuatedDiamondEntity> findAll(Pageable pageable);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ValuatedDiamondPojo(v.id,v.createdDate,v.valuationResult.origin,v.valuationResult.shape,v.valuationResult.carat_weight,v.valuationResult.color, v.valuationResult.cut,v.valuationResult.clarity,v.valuationResult.measurements,v.valuationResult.polish, v.valuationResult.symmetry, v.valuationResult.fluorescence,v.valuationResult.proportions,v.valuationResult.price)" +
            "FROM ValuatedDiamondEntity as v " +
            "WHERE v.id=:id")
    Optional<ValuatedDiamondEntity> findById(@Param("id") String id);

    @Query(value = "SELECT v FROM ValuatedDiamondEntity v WHERE v.valuationResult.id=:id")
    ValuatedDiamondEntity findByValuationResultId(@Param("id") int id);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ValuatedDiamondPojo(v.id,v.createdDate,v.valuationResult.origin,v.valuationResult.shape,v.valuationResult.carat_weight,v.valuationResult.color, v.valuationResult.cut,v.valuationResult.clarity,v.valuationResult.measurements,v.valuationResult.polish, v.valuationResult.symmetry, v.valuationResult.fluorescence,v.valuationResult.proportions,v.valuationResult.price)" +
            "FROM ValuatedDiamondEntity as v " +
            "WHERE v.valuationResult.valuationRequestId.id=:id")
  Optional<ValuatedDiamondEntity> findByValuationRequestId(@Param("id") int id);
}
