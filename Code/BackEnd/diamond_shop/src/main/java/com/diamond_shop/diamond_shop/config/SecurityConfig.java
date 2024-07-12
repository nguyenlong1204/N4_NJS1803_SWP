package com.diamond_shop.diamond_shop.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    JWTAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private UserDetailsService userDetailsService;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers(HttpMethod.GET, "/**").permitAll()
                                .requestMatchers(HttpMethod.GET, "/api/**").permitAll() 
                                .requestMatchers(HttpMethod.POST, "/api/account/save").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/account/login").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/account/google").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/account/forget-password").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/diamond/calculate").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/diamond/**").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/account/activate").permitAll()
                                .requestMatchers(HttpMethod.POST, "/api/**").authenticated()
                                .requestMatchers(HttpMethod.PUT, "/api/**").authenticated()
                                .requestMatchers(HttpMethod.PATCH, "/api/**").authenticated()
                                .requestMatchers(HttpMethod.DELETE, "/api/**").authenticated()
                                .requestMatchers("https://diamondval.vercel.app").permitAll()
                                .requestMatchers(HttpMethod.GET,"/admin/**").permitAll()
                                .requestMatchers(HttpMethod.POST,"/admin/**").permitAll()
                                .requestMatchers("/manager/**").hasRole("Manager")
                                .requestMatchers("/valuation/**").hasRole("Valuation staff")
                                .requestMatchers("/consulting/**").hasRole("Consulting staff")
                                .requestMatchers("/customer/**").hasRole("Customer")
                                .anyRequest().authenticated()
                                
                )

                // .logout(LogoutConfigurer::permitAll)
                .logout(logout -> logout
                    .logoutUrl("/logout") 
                    .logoutSuccessUrl("/") 
                    .invalidateHttpSession(true)
                    .deleteCookies("JSESSIONID")
                )
                .csrf(AbstractHttpConfigurer::disable); 
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder())
                .and()
                .build();
    }

    @Bean
    public JWTAuthenticationFilter authenticationJwtTokenFilter() {
        return new JWTAuthenticationFilter();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}