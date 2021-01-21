package com.agawrylak.PizzaStore.controller;

import com.agawrylak.PizzaStore.model.Ingredient;
import com.agawrylak.PizzaStore.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IngredientController {

    private IngredientService ingredientService;

    @Autowired
    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @GetMapping("/ingredient/all")
    @ResponseBody
    @CrossOrigin
    public List<Ingredient> getAll() {
        return ingredientService.findAll();
    }

    @CrossOrigin
    @PostMapping("/ingredient/add")
    public ResponseEntity<Ingredient> add(
            @RequestBody final Ingredient ingredient, final BindingResult bindingResult) {
        if (ingredientService.isDuplicate(ingredient)) {
            return ResponseEntity.badRequest().build();
        }
        ingredientService.add(ingredient);
        return ResponseEntity.ok(ingredient);
    }

    @CrossOrigin
    @DeleteMapping("/ingredient/delete/{id}")
    public ResponseEntity<String> delete(
            @PathVariable String id, final BindingResult bindingResult) {
        ingredientService.deleteById(id);
        return ResponseEntity.ok("Ingredient with id " + id + " deleted.");
    }
}
