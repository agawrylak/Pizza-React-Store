package com.agawrylak.PizzaStore.controller;

import com.agawrylak.PizzaStore.model.OrderDetails;
import com.agawrylak.PizzaStore.model.DTO.PizzaOrderDTO;
import com.agawrylak.PizzaStore.model.PizzaOrder;
import com.agawrylak.PizzaStore.service.OrderDetailsService;
import com.agawrylak.PizzaStore.service.PizzaOrderService;
import com.agawrylak.PizzaStore.service.PizzaService;
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
          @RequestBody final PizzaOrderDTO pizzaOrderDTO, final BindingResult bindingResult) {

    PizzaOrder pizzaOrder = new PizzaOrder();
    pizzaOrder.setPizza(pizzaService.findByName(pizzaOrderDTO.getPizza()));
    pizzaOrder.setQuantity(pizzaOrderDTO.getQuantity());
    Long orderDetailsID = (long) pizzaOrderDTO.getOrderDetailsID();
    OrderDetails orderDetails = orderDetailsService.findById(orderDetailsID);
    orderDetails.getPizzaOrders().add(pizzaOrder);
    pizzaOrder.setOrderDetails(orderDetails);

    pizzaOrderService.add(pizzaOrder);
    return ResponseEntity.ok(pizzaOrder);
  }
}
