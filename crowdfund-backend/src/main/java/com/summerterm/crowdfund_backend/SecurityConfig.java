package com.summerterm.crowdfund_backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Disable CSRF protection for simplicity in development
                .authorizeHttpRequests()
                .requestMatchers("/sign-up").permitAll() // Allow unauthenticated access to sign-up
                .anyRequest().authenticated(); // Require authentication for other requests

        return http.build();
    }
}
