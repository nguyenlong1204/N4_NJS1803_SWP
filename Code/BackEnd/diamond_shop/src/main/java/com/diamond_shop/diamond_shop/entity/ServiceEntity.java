package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@NoArgsConstructor
@Table(name = "Services")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int Id;

    @Column(name = "Name")
    private String Name;

    @Column(name = "Price")
    private String Price;

    @Column(name = "Time")
    private String Time;

    @OneToOne
    @JoinColumn(name = "Service_statistic_id")
    private ServiceStatisticEntity Service_statistic_id;

    public ServiceEntity(int id, String name, String price, String time, ServiceStatisticEntity statistic_id) {
        Id = id;
        Name = name;
        Price = price;
        Time = time;
        Service_statistic_id = statistic_id;
    }
}
