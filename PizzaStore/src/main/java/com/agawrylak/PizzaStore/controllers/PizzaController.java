package com.agawrylak.PizzaStore.controllers;

import com.agawrylak.PizzaStore.model.Ingredient;
import com.agawrylak.PizzaStore.model.POJO.PizzaPOJO;
import com.agawrylak.PizzaStore.model.Pizza;
import com.agawrylak.PizzaStore.services.IngredientService;
import com.agawrylak.PizzaStore.services.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PizzaController {

  private PizzaService pizzaService;
  private IngredientService ingredientService;

  @Autowired
  public PizzaController(PizzaService pizzaService, IngredientService ingredientService) {
    this.pizzaService = pizzaService;
    this.ingredientService = ingredientService;
  }

  @GetMapping("/pizza/all")
  @ResponseBody
  @CrossOrigin
  public List<Pizza> getAll() {
    return pizzaService.findAll();
  }

  @GetMapping("/pizza/{id}")
  @ResponseBody
  public Pizza getSingle(@PathVariable int id) {
    return pizzaService.findById(id);
  }

  @CrossOrigin
  @PostMapping("/pizza/add")
  public ResponseEntity<Pizza> add(
      @RequestBody final PizzaPOJO pizzaPOJO, final BindingResult bindingResult) {
    Pizza pizza = new Pizza();
    pizza.setName(pizzaPOJO.getName());
    for (String ingredient : pizzaPOJO.getIngredients()) {
      Ingredient newIngredient = new Ingredient(ingredient);
      if (ingredientService.isDuplicate(newIngredient)) {
        pizza.getIngredients().add(ingredientService.findByName(newIngredient.getName()));
      } else {
        pizza.getIngredients().add(new Ingredient(ingredient));
      }
    }

    // TODO: MAKE THIS WORK
    // if(pizzaService.isDuplicate(pizza)){
    //    return ResponseEntity.badRequest().build();
    // }

    pizzaService.add(pizza);
    return ResponseEntity.ok(pizza);
  }
}
