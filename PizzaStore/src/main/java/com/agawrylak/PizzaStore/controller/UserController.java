package com.agawrylak.PizzaStore.controller;

import com.agawrylak.PizzaStore.model.DTO.UserDTO;
import com.agawrylak.PizzaStore.model.User;
import com.agawrylak.PizzaStore.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody final UserDTO userDTO, final BindingResult bindingResult){
        return null;

    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@RequestBody final UserDTO userDTO, final BindingResult bindingResult){
        userService.registerNewUserAccount(userDTO);
        return ResponseEntity.ok(userDTO);

    }
}
