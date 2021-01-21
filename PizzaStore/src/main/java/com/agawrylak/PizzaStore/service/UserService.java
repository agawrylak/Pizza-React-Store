package com.agawrylak.PizzaStore.service;

import com.agawrylak.PizzaStore.model.DTO.UserDTO;
import com.agawrylak.PizzaStore.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService {
    public User registerNewUserAccount(UserDTO accountDto);
    public User getUserByUsername(String username);
    public Boolean existsByUsername(String username);

}
