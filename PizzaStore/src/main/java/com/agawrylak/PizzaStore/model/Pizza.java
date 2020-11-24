package com.agawrylak.PizzaStore.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pizza")
@Setter
@Getter
@EqualsAndHashCode
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Pizza implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "name")
  private String name;

  @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
  @JoinTable(
      name = "pizza_ingredient",
      joinColumns = @JoinColumn(name = "pizza_id", referencedColumnName = "id"),
      inverseJoinColumns = @JoinColumn(name = "ingredient_id", referencedColumnName = "id"))
  private List<Ingredient> ingredients = new ArrayList<>();

  @Column(name = "cost")
  private double pizzaCost;

  @OneToMany(
      mappedBy = "pizza",
      orphanRemoval = true,
      fetch = FetchType.LAZY,
      cascade = CascadeType.ALL)
  private List<PizzaOrder> pizzaOrders;

  public Pizza() {
    super();
  }

  public void setDefaultPizzaCost() {
    double price = 10;
    for (Ingredient ingredient : this.getIngredients()) {
      price += 3.50;
    }
    this.setPizzaCost(price);
  }
}
