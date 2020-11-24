import React from "react";
import {
  CardHeader,
  Card,
  CardActions,
  Button,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import PizzaDesc from "./PizzaDesc";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardActions: {
    justifyContent: "center",
    paddingBottom: "0",
    float: "bottom",
  },
  cardHeader: {
    textAlign: "center",
  },
  cardContent: {
    textAlign: "center",
  },
  card: {
    display: "inline-block",
    width: "225px",
    height: "430px",
    position: "relative",
  },
  cardButton: {
    position: "absolute",
    bottom: 0,
  },
  cardPrice: {
    marginTop: 20,
  },
});

function Pizza(props) {
  const classes = useStyles();

  function handleBuy() {
    const pizza = {
      name: props.title,
      ingredients: props.ingredients,
      cost: props.cost,
      quantity: 1,
    };
    localStorage.setItem(pizza.name, JSON.stringify(pizza));
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          title={props.title}
          classes={{ root: classes.cardHeader }}
        />
        <CardMedia style={{ display: "flex", justifyContent: "center" }}>
          <img src={require("../Assets/pizza_img.jpg")}  alt={'photo of pizza'}/>
        </CardMedia>
        <CardContent classes={{ root: classes.cardActions }}>
          <PizzaDesc ingredients={props.ingredients}/>
        </CardContent>
        <div className={classes.cardPrice}>Cena: {props.cost} zł</div>
        <CardActions classes={{ root: classes.cardActions }}>
          <Button className={classes.cardButton} onClick={handleBuy}>
            {" "}
            Zamów{" "}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Pizza;
