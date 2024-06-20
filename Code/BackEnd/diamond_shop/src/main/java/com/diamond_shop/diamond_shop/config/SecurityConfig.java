package com.diamond_shop.diamond_shop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/account/save").permitAll()
                                .requestMatchers("/api/admin/get").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/account/login").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/diamond/calculate").permitAll()
                                .requestMatchers("/api/sealing-letter/").permitAll()
                                .requestMatchers("/api/process-sealing/").permitAll()
                                .requestMatchers("https://diamondval.vercel.app").permitAll()
                                .anyRequest().permitAll() // Allow access without authentication to all requests
                )
                .logout(logout ->
                        logout
                                .permitAll() // Allow access to the logout page without authentication
                )
                .csrf(c -> c.disable()); // Disable CSRF protection
        http.cors(); // Enable CORS

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}