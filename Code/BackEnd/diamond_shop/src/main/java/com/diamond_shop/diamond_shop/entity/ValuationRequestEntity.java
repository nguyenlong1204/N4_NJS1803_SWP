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
@Table(name = "valuation_requests")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuationRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pending_request_id")
    private PendingRequestsEntity pendingRequestId;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "payment_id")
    private PaymentEntity paymentId;

    @NotNull(message = "Created date is mandatory")
    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "finish_date")
    private Date finishDate;

    @NotNull(message = "Sealing date is mandatory")
    @Column(name = "sealing_date")
    private Date sealingDate;

    @OneToOne(mappedBy = "valuationRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationResultEntity valuationResult;

    @OneToOne(mappedBy = "valuationRequest", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private SealingLetterEntity sealingLetter;

    @OneToOne(mappedBy = "valuationRequest", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationReceiptEntity valuationReceipt;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private ServiceEntity serviceId;

    public ValuationRequestEntity(PendingRequestsEntity pendingRequestId, ServiceEntity serviceId,
                                  PaymentEntity paymentId, @NotNull(message = "Created date is mandatory") Date createdDate, Date finishDate,
                                  @NotNull(message = "Sealing date is mandatory") Date sealingDate) {
        this.pendingRequestId = pendingRequestId;
        this.serviceId = serviceId;
        this.paymentId = paymentId;
        this.createdDate = createdDate;
        this.finishDate = finishDate;
        this.sealingDate = sealingDate;
    }

}
