package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "Services")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int Id;

    @NotNull(message = "Service name is mandatory")
    @Column(name = "Name")
    private String Name;

    @NotNull(message = "Service price is mandatory")
    @Column(name = "Price")
    private String Price;

    @NotNull(message = "Service valuation time is mandatory")
    @Column(name = "Time")
    private String Time;

    @OneToOne
    @JoinColumn(name = "Statistic_id")
    private ServiceStatisticEntity Statistic_id;

    @OneToMany(mappedBy = "serviceId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ValuationRequestEntity> valuation_request_id;

    public ServiceEntity(int id) {
        Id = id;
    }

    public ServiceEntity(int id, String name, String price, String time, ServiceStatisticEntity statistic_id) {
        Id = id;
        Name = name;
        Price = price;
        Time = time;
        Statistic_id = statistic_id;
    }

}
