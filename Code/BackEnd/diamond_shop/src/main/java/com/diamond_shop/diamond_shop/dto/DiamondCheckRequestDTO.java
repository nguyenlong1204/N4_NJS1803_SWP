package com.diamond_shop.diamond_shop.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class DiamondCheckRequestDTO {
    @NotNull
    String gradingLab;
    @NotNull
    String carat;
    @NotNull
    String shape;
    @NotNull
    String color;
    @NotNull
    String clarity;
    @NotNull
    String cut;
}
