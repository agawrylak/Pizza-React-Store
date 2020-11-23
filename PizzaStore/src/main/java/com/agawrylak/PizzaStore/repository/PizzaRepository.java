package com.agawrylak.PizzaStore.repository;

import com.agawrylak.PizzaStore.model.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Long> {

    List<Pizza> findByName(String name);

    List<Pizza> findAll();

}
