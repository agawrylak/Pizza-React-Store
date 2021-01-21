package com.agawrylak.PizzaStore.repository;

import com.agawrylak.PizzaStore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User getUserByUsername(String username);
    Boolean existsByUsername(String username);


    List<User> findAll();

}
