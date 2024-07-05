package com.diamond_shop.diamond_shop.pojo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DiamondPojo {
    private String title;
    private String name;
    private String price;
    private String priceChange;
    private String weight;
    private String inventory;
    private String inventoryChangeUp;
    private String inventoryChangeDown;
    private String imageUrl;
    public DiamondPojo(String title) {
        this.title = title;
    }
    
    public DiamondPojo(String name, String price, String priceChange, String weight, String inventory,
            String inventoryChangeUp, String inventoryChangeDown, String imageUrl) {
        this.name = name;
        this.price = price;
        this.priceChange = priceChange;
        this.weight = weight;
        this.inventory = inventory;
        this.inventoryChangeUp = inventoryChangeUp;
        this.inventoryChangeDown = inventoryChangeDown;
        this.imageUrl = imageUrl;
    }

    private String priceIndex;
    private String chart;
    private String priceUsd;
    private String changeUp;
    private String changeDown;
    private String range;
    private String inv;
    public DiamondPojo(String priceIndex, String chart, String priceUsd, String changeUp,
                       String changeDown, String range, String inv) {
        this.priceIndex = priceIndex;
        this.chart = chart;
        this.priceUsd = priceUsd;
        this.changeUp = changeUp;
        this.changeDown = changeDown;
        this.range = range;
        this.inv = inv;
    }
}
