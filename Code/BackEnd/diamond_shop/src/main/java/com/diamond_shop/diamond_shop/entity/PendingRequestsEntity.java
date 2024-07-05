package com.diamond_shop.diamond_shop.entity;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "pending_requests")
public class PendingRequestsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private AccountEntity customerId;

    @Column(name = "description")
    private String description;

    @Column(name = "created_date")
    private Date createdDate;

    @OneToOne(mappedBy = "pendingRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ProcessRequestEntity processRequestEntity;

    @OneToOne(mappedBy = "pendingRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationRequestEntity valuationRequestEntity;

    public PendingRequestsEntity(AccountEntity customerId, String description, Date createdDate) {
        this.customerId = customerId;
        this.description = description;
        this.createdDate = createdDate;
    }

}
