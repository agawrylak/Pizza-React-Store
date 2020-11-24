package com.agawrylak.PizzaStore.repository;

import com.agawrylak.PizzaStore.model.PizzaOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaOrderRepository extends JpaRepository<PizzaOrder, Long> {}
