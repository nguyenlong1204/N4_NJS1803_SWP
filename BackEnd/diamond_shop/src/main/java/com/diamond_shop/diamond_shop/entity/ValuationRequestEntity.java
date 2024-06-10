package com.diamond_shop.diamond_shop.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "Valuation_requests")
public class ValuationRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "Customer_id")
    private AccountEntity customer;

    @ManyToOne
    @JoinColumn(name = "Service_id")
    private ServiceEntity serviceId;

    @Column(name = "Created_date")
    private Date createdDate;

    @Column(name = "Description")
    private String description;
    
    @OneToMany(mappedBy = "valuationRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    public ValuationRequestEntity(int id, AccountEntity customer, ServiceEntity serviceId, Date createdDate,
            String description) {
        this.id = id;
        this.customer = customer;
        this.serviceId = serviceId;
        this.createdDate = createdDate;
        this.description = description;
    }
}
