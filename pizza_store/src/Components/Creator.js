import React from "react";
import PizzaForm from "./PizzaForm";
import IngredientForm from "./IngredientForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  creator: {
    display: "flex",
    flexWRap: "wrap",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "left",
    marginRight: "100px",
  },
});

function Creator(props) {
  const classes = useStyles();

  return (
    <div className={classes.creator}>
      <PizzaForm
        ingredients={props.ingredients}
        fetchPizzas={props.fetchPizzas}
      />
      <IngredientForm
        fetchIngredients={props.fetchIngredients}
        ingredients={props.ingredients}
      />
    </div>
  );
}

export default Creator;
