package com.diamond_shop.diamond_shop.entity;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "payments")
public class PaymentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private AccountEntity customerId;

    @Column(name = "created_date")
    private Date createdDate;
    
    @Column(name = "bank")
    private String bank;

    @Column(name = "amount")
    private int amount;
    
    @Column(name = "transaction_no")
    private String transaction;

    @Column(name = "order_info")
    private String orderInfo;

    @OneToOne(mappedBy = "paymentId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationRequestEntity valuationRequestEntity;

    public PaymentEntity(AccountEntity customerId, Date createdDate, String bank, int amount, String transaction,
            String orderInfo) {
        this.customerId = customerId;
        this.createdDate = createdDate;
        this.bank = bank;
        this.amount = amount;
        this.transaction = transaction;
        this.orderInfo = orderInfo;
    }
}
