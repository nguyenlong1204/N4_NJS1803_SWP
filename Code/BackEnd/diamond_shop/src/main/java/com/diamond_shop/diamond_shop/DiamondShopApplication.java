package com.diamond_shop.diamond_shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;

@SpringBootApplication
public class DiamondShopApplication {
	public static void main(String[] args) {
		SpringApplication.run(DiamondShopApplication.class, args);
		System.out.println("It's running!");
	}
}