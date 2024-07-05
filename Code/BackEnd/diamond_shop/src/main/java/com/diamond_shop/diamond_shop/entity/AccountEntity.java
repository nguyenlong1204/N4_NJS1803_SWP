package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AccountEntity {
    @SequenceGenerator(
            name = "users_sequence",
            sequenceName = "users",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private RoleEntity role;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "full_name")
    private String fullname;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phone_number;

    @Column(name = "address")
    private String address;

    @OneToMany(mappedBy = "staffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    @OneToMany(mappedBy = "customerId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<PendingRequestsEntity> pendingRequestsEntities = new HashSet<>();

    @OneToMany(mappedBy = "valuationStaffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessResultEntity> processResultEntity = new HashSet<>();

    @OneToMany(mappedBy = "customerId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<PaymentEntity> paymentEntity = new HashSet<>();

    public AccountEntity(RoleEntity role_id, String username, String password, String fullname, String phone_number, String email) {
        this.role = role_id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.email = email;
    }

    public AccountEntity(int id, String username, String fullname, String phone_number, String password) {
        this.id = id;
        this.username = username;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.password = password;
    }

    public AccountEntity(RoleEntity role, String username, String password, String fullname, String email, String phonenumber, String address) {
        this.role = role;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phonenumber;
        this.address = address;
    }

    public AccountEntity(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
