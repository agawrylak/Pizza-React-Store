package com.agawrylak.PizzaStore.services;

import com.agawrylak.PizzaStore.model.Ingredient;
import com.agawrylak.PizzaStore.model.Pizza;
import com.agawrylak.PizzaStore.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PizzaService {

  private PizzaRepository pizzaRepository;

  public List<Pizza> findAll() {
    return this.pizzaRepository.findAll();
  }

  @Autowired
  public PizzaService(PizzaRepository pizzaRepository) {
    super();
    this.pizzaRepository = pizzaRepository;
  }

  public Pizza findById(int id) {
    List<Pizza> allPizzas = findAll();
    for (Pizza pizza : allPizzas) {
      if (pizza.getId() == id) {
        return pizza;
      }
    }
    return null;
  }

  public Pizza findByName(String name) {
    return pizzaRepository.findByName(name).get(0);
  }

  public void add(Pizza pizza) {

    pizza.setDefaultPizzaCost();
    this.pizzaRepository.save(pizza);
  }

  public boolean isDuplicate(Pizza pizza) {
    return pizzaRepository.findByName(pizza.getName()) != null;
  }
}
