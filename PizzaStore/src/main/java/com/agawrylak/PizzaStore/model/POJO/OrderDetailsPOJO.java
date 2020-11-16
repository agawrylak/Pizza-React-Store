package com.agawrylak.PizzaStore.model.POJO;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
public class OrderDetailsPOJO {
    private String name;
    private String surname;
    private String address;
    private String email;
    private Long phoneNumber;
    private ArrayList<PizzaOrderPOJO> pizzaOrderPOJOs;
}
