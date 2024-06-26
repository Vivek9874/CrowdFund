package com.summerterm.crowdfund_backend.controller;

import com.summerterm.crowdfund_backend.entity.User;
import com.summerterm.crowdfund_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sign-up")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public String signUp(@RequestBody User user) {
        userService.saveUser(user);
        return "User successfully registered";
    }
}
