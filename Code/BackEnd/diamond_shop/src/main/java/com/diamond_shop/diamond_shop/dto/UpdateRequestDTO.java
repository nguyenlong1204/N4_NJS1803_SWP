package com.diamond_shop.diamond_shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateRequestDTO {
    private String type;
    private String processRequestStatus;
    private int consultingStaffId;
    private int pendingRequestId;
}
