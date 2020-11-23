import React, { useState } from "react";
import Ingredients from "./Ingredients";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, FormLabel } from "@material-ui/core";
import { IngredientAPI } from "../api/IngredientAPI";

const useStyles = makeStyles({
  ingredients: {
    background: "white",
    margin: "10px",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "20 px 20px 10px #888888",
    width: "100%",
    marginLeft: "15px",
  },
  center: {
    textAlign: "center",
  },
  form: {
    justifyContent: "center",
    textAlign: "center",
  },
});

function IngredientForm(props) {
  const classes = useStyles();
  const [ingredientName, ingredientNameState] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    const pizzaIngredient = {
      name: ingredientName,
    };
    IngredientAPI.postIngredient(pizzaIngredient).then((result) =>
      console.log(result)
    );
    console.log(pizzaIngredient.name);
  }

  function onChangeName(e) {
    ingredientNameState(e.target.value);
  }

  return (
    <div>
      <Box className={classes.ingredients} boxShadow={2}>
        <Ingredients
          fetchIngredients={props.fetchIngredients}
          ingredients={props.ingredients}
        />
        <form className={classes.form} onSubmit={onSubmit}>
          <FormControl
            classname={classes.form}
            component="fieldset"
            variant="filled"
          >
            <FormLabel component="legend" className={classes.center}>
              Nowy składnik
            </FormLabel>
            <TextField value={ingredientName} onChange={onChangeName} />
          </FormControl>
          <div className={classes.center}>
            <Button type="submit" className={classes.center}>
              {" "}
              Wyślij{" "}
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default IngredientForm;
