// UserService.java
package com.summerterm.crowdfund_backend.service;

import com.summerterm.crowdfund_backend.repository.UserRepository;
import com.summerterm.crowdfund_backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        // You might want to hash the password before saving it

        return userRepository.save(user);
    }
}
