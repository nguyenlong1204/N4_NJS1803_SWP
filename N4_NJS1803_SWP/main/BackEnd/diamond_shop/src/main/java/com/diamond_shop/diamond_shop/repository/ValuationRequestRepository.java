package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.dto.ValuationRequestDTO;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ValuationRequestRepository extends JpaRepository<ValuationRequestEntity, Integer> {

    Page<ValuationRequestEntity> findAll(Pageable pageable);

    @Query(value = "SELECT v FROM ValuationRequestEntity v WHERE v.customer.fullname LIKE lower(concat(:search, '%')) OR v.serviceId.Name LIKE lower(concat(:search, '%')) OR v.description LIKE lower(concat(:search, '%') )")
    Page<ValuationRequestEntity> searchNonFilter(Pageable pageable, String search);

    @Query(value = "SELECT v FROM ValuationRequestEntity v WHERE v.customer.fullname LIKE lower(concat(:customerName, '%'))")
    Page<ValuationRequestEntity> searchCustomerName(Pageable pageable, @Param("customerName") String customerName);

    @Query(value = "SELECT v FROM ValuationRequestEntity v WHERE v.serviceId.Name LIKE lower(concat(:serviceName, '%') ) ")
    Page<ValuationRequestEntity> searchServiceName(Pageable pageable, @Param("serviceName") String serviceName);

    @Query(value = "SELECT v FROM ValuationRequestEntity v WHERE v.description LIKE lower(concat(:description, '%') ) ")
    Page<ValuationRequestEntity> searchDescription(Pageable pageable, @Param("description") String description);

    @Query("SELECT new com.diamond_shop.diamond_shop.dto.ValuationRequestDTO(vr.customer.username, vr.serviceId.Id, vr.createdDate, vr.description) FROM ValuationRequestEntity vr")
    List<ValuationRequestDTO> findAllList();

    ValuationRequestEntity findById(int id);

    @Query(value = "SELECT s FROM ValuationRequestEntity s")
    List<ValuationRequestEntity> getAll();
}
