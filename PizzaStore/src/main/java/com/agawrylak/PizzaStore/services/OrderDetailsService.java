package com.agawrylak.PizzaStore.services;


import com.agawrylak.PizzaStore.model.OrderDetails;
import com.agawrylak.PizzaStore.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailsService {

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    public void add(OrderDetails orderDetails){

        this.orderDetailsRepository.saveAndFlush(orderDetails);

    }
}
