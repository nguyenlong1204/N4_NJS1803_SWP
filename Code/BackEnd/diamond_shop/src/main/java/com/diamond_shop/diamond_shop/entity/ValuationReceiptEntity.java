package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Valuation_receipts")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuationReceiptEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @NotNull(message = "Created date is mandatory")
    @Column(name = "Created_date")
    private Date createdDate;

    @OneToOne
    @JoinColumn(name = "Valuation_request_id")
    private ValuationRequestEntity valuationRequestId;

    public ValuationReceiptEntity(Date createdDate, ValuationRequestEntity valuationRequestId) {
        this.createdDate = createdDate;
        this.valuationRequestId = valuationRequestId;
    }
}
