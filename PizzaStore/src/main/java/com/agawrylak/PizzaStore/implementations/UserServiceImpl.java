package com.agawrylak.PizzaStore.implementations;

import com.agawrylak.PizzaStore.model.DTO.UserDTO;
import com.agawrylak.PizzaStore.model.User;
import com.agawrylak.PizzaStore.repository.UserRepository;
import com.agawrylak.PizzaStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component(value = "userDetailService")
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    private List<SimpleGrantedAuthority> getAuthority() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("username = " + username);
        User user = userRepository.getUserByUsername(username);
        org.springframework.security.core.userdetails.User userd = new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority());
        return userd;
        //userRepository.getUserByUsername(username); TODO: if it's not working bring this back!
    }

    @Override
    public User registerNewUserAccount(UserDTO userDTO){
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userRepository.save(user);
    }
}
