package com.agawrylak.PizzaStore.model.POJO;

import com.agawrylak.PizzaStore.model.Pizza;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
public class PizzaOrderPOJO {
    private Pizza pizza;
    private int quantity;
}
