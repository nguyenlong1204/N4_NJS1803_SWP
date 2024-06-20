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
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Valuation_requests")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuationRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Customer_id")
    private AccountEntity customer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Service_id")
    private ServiceEntity serviceId;

    @NotNull(message = "Created date is mandatory")
    @Column(name = "Created_date")
    private Date createdDate;

    @Column(name = "Finish_date")
    private Date finishDate;

    @NotNull(message = "Sealing date is mandatory")
    @Column(name = "Sealing_date")
    private Date sealingDate;

    @Column(name = "Description")
    private String description;

    @OneToMany(mappedBy = "valuationRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    @OneToOne(mappedBy = "valuationRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationResultEntity valuationResult;

    @OneToOne(mappedBy = "valuationRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationReceiptEntity valuationReceipt;

    @OneToOne(mappedBy = "valuationRequest", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private SealingLetterEntity sealingLetter;

    @OneToOne(mappedBy = "valuationRequest", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private CommitmentEntity commitment;

    public ValuationRequestEntity(AccountEntity customer, ServiceEntity serviceId, Date createdDate, Date finishDate, Date sealingDate, String description) {
        this.customer = customer;
        this.serviceId = serviceId;
        this.createdDate = createdDate;
        this.finishDate = finishDate;
        this.sealingDate = sealingDate;
        this.description = description;
    }

    public ValuationRequestEntity(int id, AccountEntity customer, ServiceEntity serviceId, Date createdDate, Date sealingDate,
                                  String description) {
        this.id = id;
        this.customer = customer;
        this.serviceId = serviceId;
        this.createdDate = createdDate;
        this.sealingDate = sealingDate;
        this.description = description;
    }
}
