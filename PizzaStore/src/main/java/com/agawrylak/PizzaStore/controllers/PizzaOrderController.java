package com.agawrylak.PizzaStore.controllers;

import com.agawrylak.PizzaStore.model.OrderDetails;
import com.agawrylak.PizzaStore.model.POJO.PizzaOrderPOJO;
import com.agawrylak.PizzaStore.model.PizzaOrder;
import com.agawrylak.PizzaStore.services.OrderDetailsService;
import com.agawrylak.PizzaStore.services.PizzaOrderService;
import com.agawrylak.PizzaStore.services.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PizzaOrderController {
  private PizzaOrderService pizzaOrderService;
  private PizzaService pizzaService;
  private OrderDetailsService orderDetailsService;

  @Autowired
  public PizzaOrderController(
      PizzaOrderService pizzaOrderService,
      PizzaService pizzaService,
      OrderDetailsService orderDetailsService) {
    this.pizzaOrderService = pizzaOrderService;
    this.pizzaService = pizzaService;
    this.orderDetailsService = orderDetailsService;
  }

  @CrossOrigin
  @PostMapping("/pizzaorder/add")
  public ResponseEntity<PizzaOrder> add(
      @RequestBody final PizzaOrderPOJO pizzaOrderPOJO, final BindingResult bindingResult) {

    PizzaOrder pizzaOrder = new PizzaOrder();
    pizzaOrder.setPizza(pizzaService.findByName(pizzaOrderPOJO.getPizza()));
    pizzaOrder.setQuantity(pizzaOrderPOJO.getQuantity());
    Long orderDetailsID = (long) pizzaOrderPOJO.getOrderDetailsID();
    OrderDetails orderDetails = orderDetailsService.findById(orderDetailsID);
    orderDetails.getPizzaOrders().add(pizzaOrder);
    pizzaOrder.setOrderDetails(orderDetails);

    pizzaOrderService.add(pizzaOrder);
    return ResponseEntity.ok(pizzaOrder);
  }
}
