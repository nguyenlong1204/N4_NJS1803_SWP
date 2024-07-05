package com.diamond_shop.diamond_shop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
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
                                .requestMatchers(HttpMethod.GET, "/api/").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/").permitAll()
                                .requestMatchers(HttpMethod.PUT, "/api/").permitAll()
                                .requestMatchers(HttpMethod.PATCH, "/api/").permitAll()
                                .requestMatchers(HttpMethod.DELETE, "/api/").permitAll()
                                .requestMatchers("https://diamondval.vercel.app").permitAll()
                                .anyRequest().permitAll() // Allow access without authentication to all requests
                )
                .logout(LogoutConfigurer::permitAll // Allow access to the logout page without authentication
                )
                .csrf(AbstractHttpConfigurer::disable); // Disable CSRF protection

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}