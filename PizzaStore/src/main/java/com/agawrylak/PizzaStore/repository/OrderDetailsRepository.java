package com.agawrylak.PizzaStore.repository;

import com.agawrylak.PizzaStore.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {

  List<OrderDetails> findAll();
}
