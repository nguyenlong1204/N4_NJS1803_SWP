package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.ProcessSealingEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface ProcessSealingRepository extends JpaRepository<ProcessSealingEntity, Integer>, PagingAndSortingRepository<ProcessSealingEntity, Integer> {

    @Query(value = "SELECT " +
            "NEW  com.diamond_shop.diamond_shop.pojo.ProcessSealingPojo(p.id,p.status,p.sealingLetter.id,p.sealingLetter.content,p.sealingLetter.valuationRequest.sealingDate,p.sealingLetter.valuationRequest.customer.id, p.sealingLetter.valuationRequest.customer.fullname,p.sealingLetter.valuationRequest.serviceId.Id,p.sealingLetter.valuationRequest.serviceId.Name)" +
            "FROM ProcessSealingEntity as p")
    Page<ProcessSealingEntity> findAll(Pageable pageable);

    @Query(value = "SELECT p FROM ProcessSealingEntity p WHERE p.id=:id")
    ProcessSealingEntity findById(@RequestParam("id") int id);
}
