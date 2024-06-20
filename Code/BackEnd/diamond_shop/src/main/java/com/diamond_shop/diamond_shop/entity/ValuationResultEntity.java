package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Valuation_results")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuationResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @OneToOne
    @JoinColumn(name = "Valuation_request_id")
    private ValuationRequestEntity valuationRequestId;

    @Column(name = "Created_date")
    private Date createdDate;

    @Column(name = "Origin")
    private String origin;

    @Column(name = "Shape")
    private String shape;

    @Column(name = "Carat_weight")
    private BigDecimal carat_weight;

    @Column(name = "Color")
    private String color;

    @Column(name = "Cut")
    private String cut;

    @Column(name = "Clarity")
    private String clarity;

    @Column(name = "Measurements")
    private String measurements;

    @Column(name = "Polish")
    private String polish;

    @Column(name = "Symmetry")
    private String symmetry;

    @Column(name = "Fluorescence")
    private String fluorescence;

    @Column(name = "Proportions")
    private String proportions;

    @Column(name = "Price")
    private BigDecimal price;

    @OneToMany(mappedBy = "valuationResultId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessResultEntity> processResults = new HashSet<>();

    @OneToOne(mappedBy = "valuationResult", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ValuatedDiamondEntity valuatedDiamond;

    public ValuationResultEntity(ValuationRequestEntity valuationRequestId, Date createdDate,
                                 String origin, String shape, BigDecimal carat_weight, String color, String cut,
                                 String clarity, String measurements, String polish, String symmetry, String fluorescence,
                                 String proportions, BigDecimal price) {
        this.valuationRequestId = valuationRequestId;
        this.createdDate = createdDate;
        this.origin = origin;
        this.shape = shape;
        this.carat_weight = carat_weight;
        this.color = color;
        this.cut = cut;
        this.clarity = clarity;
        this.measurements = measurements;
        this.polish = polish;
        this.symmetry = symmetry;
        this.fluorescence = fluorescence;
        this.proportions = proportions;
        this.price = price;
    }
}
