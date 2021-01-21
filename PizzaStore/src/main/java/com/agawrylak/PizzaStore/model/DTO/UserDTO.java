package com.agawrylak.PizzaStore.model.DTO;

import com.agawrylak.PizzaStore.enums.Role;
import com.sun.istack.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
public class UserDTO {
    @NotNull
    private String username;
    @NotNull
    private String password;
    @NotNull
    private Role role;
}
