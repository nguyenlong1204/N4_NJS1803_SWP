package com.diamond_shop.diamond_shop.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "Wallets")
public class WalletsEntity {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int id;

    @OneToOne
    @JoinColumn(name = "Customer_id")
    private AccountEntity customer_id;

    @Column(name = "Balance")
    private String balance;

    @Column(name = "Update_time")
    private String updatedTime;

    public WalletsEntity(AccountEntity customer_id, String balance, String updatedTime) {
        this.customer_id = customer_id;
        this.balance = balance;
        this.updatedTime = updatedTime;
    }   
    
}
