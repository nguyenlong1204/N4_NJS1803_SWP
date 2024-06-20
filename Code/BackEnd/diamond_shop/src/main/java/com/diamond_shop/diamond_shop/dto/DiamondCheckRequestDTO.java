package com.diamond_shop.diamond_shop.dto;

import lombok.Getter;

@Getter
public class DiamondCheckRequestDTO {
    private final String gradingLab;
    private final String carat;
    private final String shape;
    private final String color;
    private final String clarity;
    private final String cut;
    public DiamondCheckRequestDTO(String gradingLab, String carat, String shape, String color, String clarity, String cut) {
        this.gradingLab = gradingLab;
        this.carat = carat;
        this.shape = shape;
        this.color = color;
        this.clarity = clarity;
        this.cut = cut;
    }

}
