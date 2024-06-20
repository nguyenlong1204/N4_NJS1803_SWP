package com.diamond_shop.diamond_shop.repository;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProcessRequestRepository extends JpaRepository<ProcessRequestEntity, Integer>, PagingAndSortingRepository<ProcessRequestEntity, Integer> {

    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.id=:id")
    ProcessRequestEntity findById(@Param("id") int id);

    @Query(value = "SELECT " +
            "NEW com.diamond_shop.diamond_shop.pojo.ProcessRequestPojo(p.staffId.id, p.staffId.fullname, p.valuationRequestId.id,p.name,p.valuationRequestId.customer.fullname,p.valuationRequestId.customer.email, p.valuationRequestId.customer.phone_number, p.valuationRequestId.serviceId.Name, p.valuationRequestId.serviceId.Price, p.valuationRequestId.serviceId.Time, p.valuationRequestId.serviceId.Statistic_id.Name, p.valuationRequestId.createdDate, p.valuationRequestId.finishDate,p.valuationRequestId.sealingDate,p.valuationRequestId.description)" +
            "FROM ProcessRequestEntity as p " +
            "WHERE p.staffId.id=:consultingStaffId")
    Page<ProcessRequestEntity> findCustomerByConsultingStaffId(Pageable pageable, @Param("consultingStaffId") int consultingStaffId);

//    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id = :staffId AND p.valuationRequestId.id = :valuationRequestId")
//    Optional<ProcessRequestEntity> findByStaffIdAndValuationRequestId(Pageable pageable, @Param("staffId") int staffId, @Param("valuationRequestId") int valuationRequestId);

    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id = :staffId AND p.staffId.role.id = :roleId")
    ProcessRequestEntity findByStaffAndRole(@Param("staffId") int staffId, @Param("roleId") int roleId);

    @Query("SELECT p FROM ProcessRequestEntity p WHERE p.staffId.id=:staffId AND p.valuationRequestId.id=:valuationRequestId")
    ProcessRequestEntity findByStaffIdAndValuationRequestId(@Param("staffId") int staffId, @Param("valuationRequestId") int valuationRequestId);

    @Query(value = "SELECT s FROM ProcessRequestEntity s")
    List<ProcessRequestEntity> getAll();

    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.staffId=:staffId")
    Optional<ProcessRequestEntity> findByStaffId(@Param("staffId") int staffId);

    @Query(value = "SELECT COUNT (p.staffId) FROM ProcessRequestEntity p WHERE p.staffId.id=:staffId")
    long countByStaffId(@Param("staffId") int staffId);

    @Query(value = "SELECT p FROM ProcessRequestEntity p WHERE p.valuationRequestId.id=:id")
    ProcessRequestEntity findByValuationRequestId(@Param("id") int id);
}
