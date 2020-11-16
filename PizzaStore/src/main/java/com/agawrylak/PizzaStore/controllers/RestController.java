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

@org.springframework.web.bind.annotation.RestController
public class RestController {

    private PizzaService pizzaService;
    private IngredientService ingredientService;
    private OrderDetailsService orderDetailsService;

    @Autowired
    public RestController(PizzaService pizzaService, IngredientService ingredientService, OrderDetailsService orderDetailsService) {
        this.pizzaService = pizzaService;
        this.ingredientService = ingredientService;
        this.orderDetailsService = orderDetailsService;
    }

    @GetMapping("/pizza/all")
    @ResponseBody
    @CrossOrigin
    public List<Pizza> getAllPizzas(){
        return pizzaService.findAll();
    }

    @GetMapping("/pizza/{id}")
    @ResponseBody
    public Pizza getSinglePizza(@PathVariable int id){
        return pizzaService.findbyId(id);
    }

    @GetMapping("/ingredient/all")
    @ResponseBody
    @CrossOrigin
    public List<Ingredient> getAllIngredients(){
        return ingredientService.findAll();
    }

    @CrossOrigin
    @PostMapping("/ingredient/add")
    public ResponseEntity<Ingredient> addIngredient(@RequestBody final Ingredient ingredient, final BindingResult bindingResult) {
        if(ingredientService.isDuplicate(ingredient)){
            return ResponseEntity.badRequest().build();
        }
        ingredientService.add(ingredient);
        return ResponseEntity.ok(ingredient);
    }

    @CrossOrigin
    @PostMapping("/pizza/add")
    public ResponseEntity<Pizza> addPizza(@RequestBody final PizzaPOJO pizzaPOJO, final BindingResult bindingResult) {
        Pizza pizza = new Pizza();
        pizza.setName(pizzaPOJO.getName());
        for(String ingredient: pizzaPOJO.getIngredients()){
            Ingredient newIngredient = new Ingredient(ingredient);
            if(ingredientService.isDuplicate(newIngredient)){
                pizza.getIngredients().add(ingredientService.findByName(newIngredient.getName()));
            }else{
                pizza.getIngredients().add(new Ingredient(ingredient));
            }
        }

        //TODO: MAKE THIS WORK
        //if(pizzaService.isDuplicate(pizza)){
        //    return ResponseEntity.badRequest().build();
        //}

        pizzaService.add(pizza);
        return ResponseEntity.ok(pizza);
    }

    @CrossOrigin
    @DeleteMapping("/ingredient/delete")
    public ResponseEntity<Ingredient> deleteIngredient(@RequestBody final Ingredient ingredient, final BindingResult bindingResult) {
        ingredientService.deleteIngredientByName(ingredient);
        return ResponseEntity.ok(ingredient);
    }


    @CrossOrigin
    @PostMapping("/pizzaorder/add")
    public ResponseEntity<OrderDetails> addPizzaOrder(@RequestBody final OrderDetailsPOJO orderDetailsPOJO, final BindingResult bindingResult) {
        OrderDetails orderDetails = new OrderDetails();

        orderDetails.setName(orderDetailsPOJO.getName());
        orderDetails.setSurname(orderDetailsPOJO.getSurname());
        orderDetails.setAddress(orderDetailsPOJO.getAddress());
        orderDetails.setEmail(orderDetailsPOJO.getEmail());


        orderDetailsService.add(orderDetails);
        return ResponseEntity.ok(orderDetails);
    }



}
