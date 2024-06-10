package com.diamond_shop.diamond_shop.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "Process_requests")
public class ProcessRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "Staff_id")
    private AccountEntity staffId;

    @ManyToOne
    @JoinColumn(name = "Valuation_request_id")
    private ValuationRequestEntity valuationRequestId;

    @Column(name = "Name")
    private String name;

    public ProcessRequestEntity(AccountEntity staffId, ValuationRequestEntity valuationRequestId, String name) {
        this.staffId = staffId;
        this.valuationRequestId = valuationRequestId;
        this.name = name;
    }

}
