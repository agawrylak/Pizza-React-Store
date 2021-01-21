package com.agawrylak.PizzaStore.model.DTO;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
public class OrderDetailsDTO {
    private String name;
    private String surname;
    private String address;
    private String email;
    private Long phoneNumber;
    private ArrayList<PizzaOrderDTO> pizzaOrderDTOS;
}
