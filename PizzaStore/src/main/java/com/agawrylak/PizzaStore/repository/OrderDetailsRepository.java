package com.agawrylak.PizzaStore.repository;

import com.agawrylak.PizzaStore.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {

  List<OrderDetails> findAll();
}
