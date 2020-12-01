import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  FormControl,
  TextField,
  FormLabel,
} from "@material-ui/core/";
import CartItem from "./CartItem";
import { OrderDetailsAPI } from "../api/OrderDetailsAPI";
import { PizzaOrderAPI } from "../api/PizzaOrderAPI";
import OrderDialog from "./OrderDialog";

const useStyles = makeStyles({
  box: {
    display: "block",
    background: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginRight: "5px",
    marginLeft: "5px",
    borderRadius: "4px",
    boxShadow: "20 px 20px 10px #888888",
    marginTop: 10,
    padding: 10,
    width: "250px",
  },
  container: {
    display: "inline-block",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    width: "100%",
  },
  center: {
    textAlign: "center",
    marginBottom: 5,
  },
  element: {
    display: "block",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "5px",
    padding: "0px",
  },
  button: {
    textAlign: "center",
    width: "100%",
  },
});

function Cart() {
  const classes = useStyles();

  const [pizzaList, setPizzaList] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  function updateState() {
    let updatedPizzaList = [];
    Object.keys(localStorage).forEach((key) => {
      updatedPizzaList = [
        ...updatedPizzaList,
        JSON.parse(localStorage.getItem(key)),
      ];
    });
    setPizzaList(updatedPizzaList);
  }

  useEffect(() => {
    updateState();
  }, []);

  //TODO: MAKE THIS ACTUALLY USEFUL

  function handleDialogClose() {
    setOpenDialog(false);
  }

  function handleDialogOpen() {
    setOpenDialog(true);
  }

  function postPizzaOrders(orderID) {
    if (orderID !== -1) {
      for (let i = 0; i < pizzaList.length; i++) {
        const pizzaOrder = {
          pizza: pizzaList[i].name,
          quantity: pizzaList[i].quantity,
          orderDetailsID: orderID,
        };
        PizzaOrderAPI.postPizzaOrder(pizzaOrder).then((response) =>
          console.log(response)
        );
      }
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  }

  function onSubmit(e) {
    let orderID = -1;
    e.preventDefault();
    const orderDetails = {
      name: name,
      surname: surname,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };
    OrderDetailsAPI.postOrderDetails(orderDetails).then((response) => {
      orderID = response.data.id;
      postPizzaOrders(orderID);
    });
    handleDialogOpen();
  }

  function getPizzasCost() {
    let totalCost = 0;
    pizzaList.forEach((pizza) => {
      totalCost = totalCost + pizza.quantity * pizza.cost;
    });
    return totalCost;
  }

  const pizzaCost = () => {
    return <div className={classes.element}>Koszt = {getPizzasCost()} zł</div>;
  };

  function validateForm() {
    return (
      name.length > 0 &&
      surname.length > 0 &&
      email.length > 0 &&
      address.length > 0 &&
      phoneNumber.length > 0
    );
  }

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeSurname(e) {
    setSurname(e.target.value);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangeAddress(e) {
    setAddress(e.target.value);
  }

  function onChangePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  const showAllPizzas = () => {
    return (
      <div className={classes.container}>
        {pizzaList.map((pizza) => (
          <CartItem pizza={pizza} updateState={updateState} />
        ))}
        {pizzaCost()}
      </div>
    );
  };

  return (
    <Box className={classes.box} boxShadow={2}>
      <div className={classes.center}>Koszyk:</div>
      {showAllPizzas()}

      <form onSubmit={onSubmit}>
        <FormControl
          className={classes.element}
          component="fieldset"
          variant="filled"
        >
          <FormLabel className={classes.element} component="legend">
            Imię
          </FormLabel>
          <TextField
            className={classes.element}
            value={name}
            onChange={onChangeName}
          />
        </FormControl>
        <FormControl
          className={classes.element}
          component="fieldset"
          variant="filled"
        >
          <FormLabel className={classes.element} component="legend">
            Nazwisko
          </FormLabel>
          <TextField
            className={classes.element}
            value={surname}
            onChange={onChangeSurname}
          />
        </FormControl>
        <FormControl
          className={classes.element}
          component="fieldset"
          variant="filled"
        >
          <FormLabel className={classes.element} component="legend">
            Email
          </FormLabel>
          <TextField
            className={classes.element}
            value={email}
            onChange={onChangeEmail}
          />
        </FormControl>
        <FormControl
          className={classes.element}
          component="fieldset"
          variant="filled"
        >
          <FormLabel className={classes.element} component="legend">
            Adres
          </FormLabel>
          <TextField
            className={classes.element}
            value={address}
            onChange={onChangeAddress}
          />
        </FormControl>
        <FormControl
          className={classes.element}
          component="fieldset"
          variant="filled"
        >
          <FormLabel className={classes.element} component="legend">
            Numer telefonu
          </FormLabel>
          <TextField
            className={classes.element}
            value={phoneNumber}
            onChange={onChangePhoneNumber}
          />
        </FormControl>
        <Button
          type="submit"
          className={classes.button}
          disabled={!validateForm()}
        >
          Złóż zamówienie
        </Button>
      </form>
      <OrderDialog open={openDialog} onClose={handleDialogClose} />
    </Box>
  );
}

export default Cart;
