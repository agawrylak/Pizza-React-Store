import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {PizzaAPI} from "../api/PizzaAPI";

const useStyles = makeStyles({
  pizzaContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "10px",
    flexGrow: "1",
  },
  grid: {
    marginRight: "15px",
  },
});

function PizzaContainer() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(PizzaAPI.getAllPizzas());
  }, []);

  const makePizza = (pizza) => {
    return (
      <Grid className={classes.grid} item xl={1} xm={12} xs={12}>
        <Pizza
          title={pizza.name}
          ingredients={pizza.ingredients}
          cost={pizza.pizzaCost}
        />
      </Grid>
    );
  };

  const makeAllPizzas = (pizzas) => {
    return pizzas.map((pizza, index) => (
      <div key={index}> {makePizza(pizza)} </div>
    ));
  };

  const classes = useStyles();
  return (
    <div className={classes.pizzaContainer}>
      <Grid container spacing={24}>
        {makeAllPizzas(pizzas)}
      </Grid>
    </div>
  );
}

export default PizzaContainer;
