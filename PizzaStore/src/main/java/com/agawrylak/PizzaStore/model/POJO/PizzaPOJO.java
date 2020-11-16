package com.agawrylak.PizzaStore.model.POJO;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
public class PizzaPOJO {
    private String name;
    private String[] ingredients;
}
