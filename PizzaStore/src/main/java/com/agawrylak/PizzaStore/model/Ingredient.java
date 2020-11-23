package com.agawrylak.PizzaStore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ingredient")
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class Ingredient implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "name")
  private String name;

  @JsonIgnore
  @ManyToMany(mappedBy = "ingredients")
  private Set<Pizza> pizzas = new HashSet<>();

  public Ingredient(String name) {
    this.name = name;
  }
}
