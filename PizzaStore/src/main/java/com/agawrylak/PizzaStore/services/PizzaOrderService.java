package com.agawrylak.PizzaStore.services;

import com.agawrylak.PizzaStore.model.PizzaOrder;
import com.agawrylak.PizzaStore.repository.PizzaOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PizzaOrderService {
  private PizzaOrderRepository pizzaOrderRepository;

  @Autowired
  public PizzaOrderService(PizzaOrderRepository pizzaOrderRepository) {
    this.pizzaOrderRepository = pizzaOrderRepository;
  }

  public void add(PizzaOrder pizzaOrder) {
    this.pizzaOrderRepository.save(pizzaOrder);
  }
}
