package com.agawrylak.PizzaStore;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.agawrylak.PizzaStore")
@EntityScan
public class PizzaStoreConfig {
    public PizzaStoreConfig(){
        super();
    }

}
