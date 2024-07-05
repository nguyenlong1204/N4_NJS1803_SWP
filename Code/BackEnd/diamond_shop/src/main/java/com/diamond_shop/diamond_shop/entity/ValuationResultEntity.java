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
@Table(name = "valuation_results")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ValuationResultEntity {
    @Id
    @Column(name = "id")
    private String id;

    @OneToOne
    @JoinColumn(name = "valuation_request_id")
    private ValuationRequestEntity valuationRequestId;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "origin")
    private String origin;

    @Column(name = "shape")
    private String shape;

    @Column(name = "carat")
    private BigDecimal carat;

    @Column(name = "color")
    private String color;

    @Column(name = "cut")
    private String cut;

    @Column(name = "clarity")
    private String clarity;

    @Column(name = "symmetry")
    private String symmetry;

    @Column(name = "polish")
    private String polish;

    @Column(name = "fluorescence")
    private String fluorescence;

    @Column(name = "measurements")
    private String measurements;

    @Column(name = "diamond_table")
    private BigDecimal diamondTable;

    @Column(name = "depth")
    private BigDecimal depth;

    @Column(name = "length_to_width_ratio")
    private BigDecimal lengthToWidthRatio;

    @Column(name = "price")
    private BigDecimal price;

    @OneToOne(mappedBy = "valuationResultId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ProcessResultEntity processResults;

    @OneToMany(mappedBy = "valuationResult", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ValuationResultImageEntity> images = new HashSet<>();

    public ValuationResultEntity(
            String id,
            ValuationRequestEntity valuationRequestId,
            Date createdDate,
            String origin,
            String shape,
            BigDecimal carat,
            String color,
            String cut,
            String clarity,
            String symmetry,
            String polish,
            String fluorescence,
            String measurements,
            BigDecimal diamondTable,
            BigDecimal depth,
            BigDecimal lengthToWidthRatio,
            BigDecimal price) {
        this.id = id;
        this.valuationRequestId = valuationRequestId;
        this.createdDate = createdDate;
        this.origin = origin;
        this.shape = shape;
        this.carat = carat;
        this.color = color;
        this.cut = cut;
        this.clarity = clarity;
        this.symmetry = symmetry;
        this.polish = polish;
        this.fluorescence = fluorescence;
        this.measurements = measurements;
        this.diamondTable = diamondTable;
        this.depth = depth;
        this.lengthToWidthRatio = lengthToWidthRatio;
        this.price = price;
    }
}
