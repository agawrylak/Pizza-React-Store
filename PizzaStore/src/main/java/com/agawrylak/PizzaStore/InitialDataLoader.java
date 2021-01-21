package com.agawrylak.PizzaStore;

import com.agawrylak.PizzaStore.model.Ingredient;
import com.agawrylak.PizzaStore.model.Pizza;
import com.agawrylak.PizzaStore.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.Arrays;

@Component
public class InitialDataLoader implements ApplicationRunner {

  private PizzaService pizzaService;

  @Autowired
  public InitialDataLoader(PizzaService pizzaService) {
    this.pizzaService = pizzaService;
  }

  @Override
  @Transactional
  public void run(ApplicationArguments args) throws Exception {
    var tomatoSauce = new Ingredient("sos pomidorowy");
    var cheese = new Ingredient("ser");
    var pineapple = new Ingredient("ananas");
    var bacon = new Ingredient("boczek");

    Ingredient[] ingredientArray1 = {tomatoSauce, cheese};
    Ingredient[] ingredientArray2 = {tomatoSauce, cheese, pineapple, bacon};

    Pizza margarita = new Pizza();
    margarita.setName("Margarita");

    Pizza hawajska = new Pizza();
    hawajska.setName("Hawajska");

    margarita.setIngredients(Arrays.asList(ingredientArray1));
    hawajska.setIngredients(Arrays.asList(ingredientArray2));

    pizzaService.add(margarita);
    pizzaService.add(hawajska);
  }
}
