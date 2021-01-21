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

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody final UserDTO userDTO, final BindingResult bindingResult){
            User user = userService.getUserByUsername(dto.getByUsername());
            boolean isPasswordValid = passwordEncoder().matches(userDTO.getPassword(),user.getPassword());
            if(isPasswordValid == true){
                return new ResponseEntity.ok("User is valid")
            }else{
                return new ResponseEntity.error("User is invalid")
            }

    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@RequestBody final UserDTO userDTO, final BindingResult bindingResult){
        userService.registerNewUserAccount(userDTO);
        return ResponseEntity.ok(userDTO);

    }
}
