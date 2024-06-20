package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.SealingLetterEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SealingLetterRepository extends JpaRepository<SealingLetterEntity, Integer>, PagingAndSortingRepository<SealingLetterEntity, Integer> {

    @Query(value = "SELECT s FROM SealingLetterEntity s")
    Page<SealingLetterEntity> findAll(Pageable pageable);
}
