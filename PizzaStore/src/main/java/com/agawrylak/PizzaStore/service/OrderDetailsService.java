package com.agawrylak.PizzaStore.service;

import com.agawrylak.PizzaStore.model.OrderDetails;
import com.agawrylak.PizzaStore.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsService {

  final OrderDetailsRepository orderDetailsRepository;

  @Autowired
  public OrderDetailsService(OrderDetailsRepository orderDetailsRepository) {
    this.orderDetailsRepository = orderDetailsRepository;
  }

  public void add(OrderDetails orderDetails) {

    this.orderDetailsRepository.saveAndFlush(orderDetails);
  }

  public OrderDetails findById(Long id){
    List<OrderDetails> orderDetailsList = orderDetailsRepository.findAll();
    for(OrderDetails orderDetails : orderDetailsList){
      if(orderDetails.getId()==id){
        return orderDetails;
      }
    }
    return null;
  }
}
