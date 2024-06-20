package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Getter
@Table(name = "Service_statistics")
public class ServiceStatisticEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int Id;

    @NotNull(message = "Statistic name is mandatory")
    @Column(name = "Name")
    private String Name;

    @OneToOne(mappedBy = "Statistic_id", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ServiceEntity Service_id;


}
