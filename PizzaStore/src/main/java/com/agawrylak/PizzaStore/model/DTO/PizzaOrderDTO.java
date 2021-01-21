package com.agawrylak.PizzaStore.model.DTO;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
public class PizzaOrderDTO {
  private String pizza;
  private int quantity;
  private int orderDetailsID;
}
