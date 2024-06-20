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
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "Commitments")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class CommitmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int id;

    @NotNull(message = "Created date is mandatory")
    @Column(name = "Created_date")
    private Date createdDate;

    @Column(name = "Content")
    private String content;

    @OneToOne
    @JoinColumn(name = "Valuation_request_id")
    private ValuationRequestEntity valuationRequest;

    @OneToMany(mappedBy = "commitment", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessCommitmentEntity> processCommitmentEntities = new HashSet<>();
}
