package com.agawrylak.PizzaStore.controller;

import com.agawrylak.PizzaStore.model.DTO.OrderDetailsDTO;
import com.agawrylak.PizzaStore.model.OrderDetails;
import com.agawrylak.PizzaStore.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderDetailsController {

  private OrderDetailsService orderDetailsService;

  @Autowired
  public OrderDetailsController(OrderDetailsService orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
  }

  @CrossOrigin
  @PostMapping("/orderdetails/add")
  public ResponseEntity<OrderDetails> add(
          @RequestBody final OrderDetailsDTO orderDetailsDTO, final BindingResult bindingResult) {
    OrderDetails orderDetails = new OrderDetails();

    orderDetails.setName(orderDetailsDTO.getName());
    orderDetails.setSurname(orderDetailsDTO.getSurname());
    orderDetails.setAddress(orderDetailsDTO.getAddress());
    orderDetails.setEmail(orderDetailsDTO.getEmail());
    orderDetails.setPhoneNumber(orderDetailsDTO.getPhoneNumber());

    orderDetailsService.add(orderDetails);
    return ResponseEntity.ok(orderDetails);
  }
}
