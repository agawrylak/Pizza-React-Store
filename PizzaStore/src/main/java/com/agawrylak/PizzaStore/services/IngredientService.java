package com.agawrylak.PizzaStore.services;

import com.agawrylak.PizzaStore.model.Ingredient;
import com.agawrylak.PizzaStore.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

  private IngredientRepository ingredientRepository;

  @Autowired
  public IngredientService(IngredientRepository ingredientRepository) {
    this.ingredientRepository = ingredientRepository;
  }

  public List<Ingredient> findAll() {
    return this.ingredientRepository.findAll();
  }

  public void add(Ingredient ingredient) {
    if (!isDuplicate(ingredient)) {
      this.ingredientRepository.save(ingredient);
    }
  }

  public boolean isDuplicate(Ingredient ingredient) {
    return ingredientRepository.findByName(ingredient.getName()) != null;
  }

  public void deleteById(String id) {
    ingredientRepository.deleteById(Long.valueOf(id));
  }

  public Ingredient findByName(String ingredientName) {
    return ingredientRepository.findByName(ingredientName);
  }
}
