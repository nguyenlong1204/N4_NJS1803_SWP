package com.diamond_shop.diamond_shop.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
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

    @NotBlank(message = "Created date is mandatory")
    @Column(name = "Created_date")
    private Date createdDate;

    @Column(name = "Description")
    private String description;
    
    @OneToMany(mappedBy = "valuationRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    @OneToOne(mappedBy = "valuationRequestId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuationResultEntity valuationResult;

    public ValuationRequestEntity(AccountEntity customer, ServiceEntity serviceId, Date createdDate, String description) {
        this.customer = customer;
        this.serviceId = serviceId;
        this.createdDate = createdDate;
        this.description = description;
    }

    public ValuationRequestEntity(int id, AccountEntity customer, ServiceEntity serviceId, Date createdDate,
                                  String description) {
        this.id = id;
        this.customer = customer;
        this.serviceId = serviceId;
        this.createdDate = createdDate;
        this.description = description;
    }
}
