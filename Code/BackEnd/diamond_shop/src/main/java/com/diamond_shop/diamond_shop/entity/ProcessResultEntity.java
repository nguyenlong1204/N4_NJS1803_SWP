package com.diamond_shop.diamond_shop.entity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "process_results")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ProcessResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "valuation_staff_id")
    private AccountEntity valuationStaffId;

    @OneToOne
    @JoinColumn(name = "valuation_result_id")
    private ValuationResultEntity valuationResultId;

    @Column(name = "status")
    private String status;

    public ProcessResultEntity(AccountEntity valuationStaffId, ValuationResultEntity valuationResultId, String status) {
        this.valuationStaffId = valuationStaffId;
        this.valuationResultId = valuationResultId;
        this.status = status;
    }
}
