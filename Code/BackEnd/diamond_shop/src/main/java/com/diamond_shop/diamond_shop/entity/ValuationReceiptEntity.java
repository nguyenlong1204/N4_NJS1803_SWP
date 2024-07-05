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
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "valuation_receipts")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuationReceiptEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne
    @JoinColumn(name = "valuation_request_id")
    private ValuationRequestEntity valuationRequest;

    @NotNull(message = "Created date is mandatory")
    @Column(name = "created_date")
    private Date createdDate;

    public ValuationReceiptEntity(ValuationRequestEntity valuationRequest, Date createdDate) {
        this.valuationRequest = valuationRequest;
        this.createdDate = createdDate;
    }
}
