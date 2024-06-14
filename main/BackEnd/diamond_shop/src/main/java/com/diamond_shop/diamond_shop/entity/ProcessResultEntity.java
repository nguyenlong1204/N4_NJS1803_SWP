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
@Table(name = "Process_results")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ProcessResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "Valuation_staff_id")
    private AccountEntity valuationStaffId;

    @ManyToOne
    @JoinColumn(name = "Valuation_result_id")
    private ValuationResultEntity valuationResultId;

    @OneToOne
    @JoinColumn(name = "Process_request_id")
    private ProcessRequestEntity ProcessRequestId;

    @Column(name = "Name")
    private String name;

    public ProcessResultEntity(AccountEntity valuationStaffId, ValuationResultEntity valuationResultId,
            ProcessRequestEntity processRequestId, String name) {
        this.valuationStaffId = valuationStaffId;
        this.valuationResultId = valuationResultId;
        this.ProcessRequestId = processRequestId;
        this.name = name;
    }
    
}
