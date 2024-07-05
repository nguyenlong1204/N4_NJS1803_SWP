package com.diamond_shop.diamond_shop.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReceivePendingRequestDTO {
    @NotNull
    int pendingRequestId;
    @NotNull
    int consultingStaffId;

}
