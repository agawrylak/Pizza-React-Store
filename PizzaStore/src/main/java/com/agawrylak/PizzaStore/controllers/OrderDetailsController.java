package com.agawrylak.PizzaStore.controllers;

import com.agawrylak.PizzaStore.model.Ingredient;
import com.agawrylak.PizzaStore.model.POJO.OrderDetailsPOJO;
import com.agawrylak.PizzaStore.model.POJO.PizzaPOJO;
import com.agawrylak.PizzaStore.model.Pizza;
import com.agawrylak.PizzaStore.model.OrderDetails;
import com.agawrylak.PizzaStore.services.IngredientService;
import com.agawrylak.PizzaStore.services.OrderDetailsService;
import com.agawrylak.PizzaStore.services.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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
      @RequestBody final OrderDetailsPOJO orderDetailsPOJO, final BindingResult bindingResult) {
    OrderDetails orderDetails = new OrderDetails();

    orderDetails.setName(orderDetailsPOJO.getName());
    orderDetails.setSurname(orderDetailsPOJO.getSurname());
    orderDetails.setAddress(orderDetailsPOJO.getAddress());
    orderDetails.setEmail(orderDetailsPOJO.getEmail());
    orderDetails.setPhoneNumber(orderDetailsPOJO.getPhoneNumber());

    orderDetailsService.add(orderDetails);
    return ResponseEntity.ok(orderDetails);
  }
}
