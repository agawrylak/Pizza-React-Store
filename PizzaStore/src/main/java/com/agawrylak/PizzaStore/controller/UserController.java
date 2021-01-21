package com.agawrylak.PizzaStore.controller;

import com.agawrylak.PizzaStore.model.DTO.UserDTO;
import com.agawrylak.PizzaStore.model.User;
import com.agawrylak.PizzaStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    final
    PasswordEncoder passwordEncoder;

    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody final UserDTO userDTO, final BindingResult bindingResult){
            User user = userService.getUserByUsername(userDTO.getUsername());
            boolean isPasswordValid = passwordEncoder.matches(userDTO.getPassword(),user.getPassword());
            if(isPasswordValid){
                return ResponseEntity.ok("User is valid");

            }else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody final UserDTO userDTO, final BindingResult bindingResult){
        User user = userService.registerNewUserAccount(userDTO);
        return ResponseEntity.ok(user);

    }
}
