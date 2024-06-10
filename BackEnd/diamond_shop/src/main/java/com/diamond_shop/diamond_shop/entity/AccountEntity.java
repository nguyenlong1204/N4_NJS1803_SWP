package com.diamond_shop.diamond_shop.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "Users")
public class AccountEntity {
    @SequenceGenerator(
            name = "Users_sequence",
            sequenceName = "Users",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "Id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "Role_id")
    private RoleEntity role;

    @Column(name = "Username")
    private String username;

    @Column(name = "Password")
    private String password;

    @Column(name = "Fullname")
    private String fullname;

    @Column(name = "Email")
    private String email;

    @Column(name = "Phone_number")
    private String phone_number;

    @Column(name = "Address")
    private String address;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<ValuationRequestEntity> valuationRequestEntity;

    @OneToMany(mappedBy = "staffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    public AccountEntity(RoleEntity role_id, String username, String fullname, String phone_number, String password) {
        this.role = role_id;
        this.username = username;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.password = password;
    }

    public AccountEntity(int id, String username, String fullname, String phone_number, String password) {
        this.id = id;
        this.username = username;
        this.fullname = fullname;
        this.phone_number = phone_number;
        this.password = password;
    }

    public AccountEntity(RoleEntity role, String username, String password, String fullname, String phonenumber, String encode) {
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
}
