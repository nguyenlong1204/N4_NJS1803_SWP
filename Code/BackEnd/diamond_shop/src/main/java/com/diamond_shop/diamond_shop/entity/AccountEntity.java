package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
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

    @Pattern(regexp = "(?!\\s)[a-zA-Z0-9]+$", message = "Invalid username")
    @Column(name = "Username")
    private String username;

    @Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\\w\\s]).{8,}$", message = "Invalid password")
    @Column(name = "Password")
    private String password;

    @Pattern(regexp = "(?!\\s)[a-zA-Z\\s]+$", message = "Invalid full name")
    @Column(name = "Fullname")
    private String fullname;

    @Email(message = "Invalid email", regexp = "([a-zA-Z0-9]+)([\\_\\.\\-{1}])?([a-zA-Z0-9]+)\\@([a-zA-Z0-9]+)([\\.])([a-zA-Z\\.]+)")
    @Column(name = "Email")
    private String email;

    @Pattern(regexp = "^0?([3|5|7|8|9]+([0-9]{8})\\b)", message = "Invalid phone number")
    @Column(name = "Phone_number")
    private String phone_number;

    @Column(name = "Address")
    private String address;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<ValuationRequestEntity> valuationRequestEntity;

    @OneToMany(mappedBy = "staffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessRequestEntity> processRequestEntity = new HashSet<>();

    @OneToMany(mappedBy = "valuationStaffId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessResultEntity> processResultEntity = new HashSet<>();

    @OneToMany(mappedBy = "manager", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessSealingEntity> processSealingEntities = new HashSet<>();

    @OneToMany(mappedBy = "manager", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ProcessCommitmentEntity> processCommitmentEntities = new HashSet<>();

    @OneToOne(mappedBy = "customer_id", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private WalletsEntity wallets;

    public AccountEntity(RoleEntity role_id, String username, String password, String fullname, String phone_number) {
        this.role = role_id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.phone_number = phone_number;
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
