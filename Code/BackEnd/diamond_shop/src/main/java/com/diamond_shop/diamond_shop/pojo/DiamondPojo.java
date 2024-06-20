package com.diamond_shop.diamond_shop.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DiamondPojo {
    private String name;
    private String price;
    private String priceChange;
    private String weight;
    private String inventory;
    private String inventoryChange;
    private String imageUrl;
    public DiamondPojo(String name, String price, String priceChange, String weight, String inventory,
            String inventoryChange, String imageUrl) {
        this.name = name;
        this.price = price;
        this.priceChange = priceChange;
        this.weight = weight;
        this.inventory = inventory;
        this.inventoryChange = inventoryChange;
        this.imageUrl = imageUrl;
    }
    private String priceIndex;
    private String chart;
    private String priceUsd;
    private String change;
    private String range;
    private String inv;
    public DiamondPojo(String priceIndex, String chart, String priceUsd, String change, String range, String inv) {
        this.priceIndex = priceIndex;
        this.chart = chart;
        this.priceUsd = priceUsd;
        this.change = change;
        this.range = range;
        this.inv = inv;
    }
}
