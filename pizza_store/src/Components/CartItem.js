import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  singlePizza: {
    display: "flex",
    backgroundColor: "white",
    padding: 5,
    "&:hover": {
      background: "Gainsboro",
    },
    justifyContent: "space-between",
  },
  quantity: {
    paddingLeft: 5,
  },
  button: {
    minWidth: "5px",
    height: 21,
  },
  quantityControl: {
    display: "flex",
    marginLeft: 10,
    marginRight: 10,
    border: "1px solid black",
    float: "right",
  },
  icon: {
    width: 2,
    height: 2,
    float: "right",
  },
});

function CartItem(props) {
  const classes = useStyles();

  function handleOnClickSub() {
    if (props.pizza.quantity > 1) {
      const pizza = props.pizza;
      pizza.quantity = pizza.quantity - 1;
      localStorage.setItem(props.pizza.name, JSON.stringify(pizza));
      props.updateState();
    }
  }

  function handleOnClickAdd() {
    if (props.pizza.quantity < 9) {
      const pizza = props.pizza;
      pizza.quantity = pizza.quantity + 1;
      localStorage.setItem(props.pizza.name, JSON.stringify(pizza));
      props.updateState();
    }
  }

  function handleOnClickDelete() {
    localStorage.removeItem(props.pizza.name);
    props.updateState();
  }

  return (
    <div className={classes.singlePizza}>
      {props.pizza.name}
      <div>
        <IconButton
          onClick={handleOnClickDelete}
          position="right"
          className={classes.icon}
        >
          <Delete />
        </IconButton>

        <div className={classes.quantityControl}>
          <Button className={classes.button} onClick={handleOnClickSub}>
            -
          </Button>
          <div className={classes.quantity}>{props.pizza.quantity}</div>
          <Button className={classes.button} onClick={handleOnClickAdd}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
