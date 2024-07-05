package com.diamond_shop.diamond_shop.entity;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Getter
@Setter
@NoArgsConstructor
@Table(name = "service_statistics")
public class ServiceStatisticEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotNull(message = "Statistic name is mandatory")
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "statistic_id", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ServiceEntity> serviceEntity = new HashSet<>();

    public ServiceStatisticEntity(@NotNull(message = "Statistic name is mandatory") String name) {
        this.name = name;
    }
    
}
