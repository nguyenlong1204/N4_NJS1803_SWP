package com.diamond_shop.diamond_shop.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "process_requests")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ProcessRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "consulting_staff_id")
    private AccountEntity staffId;

    @OneToOne
    @JoinColumn(name = "pending_request_id")
    private PendingRequestsEntity pendingRequestId;

    @Column(name = "status")
    private String status;

    public ProcessRequestEntity(AccountEntity staffId, PendingRequestsEntity pendingRequestId, String status) {
        this.staffId = staffId;
        this.pendingRequestId = pendingRequestId;
        this.status = status;
    }    
    
}
