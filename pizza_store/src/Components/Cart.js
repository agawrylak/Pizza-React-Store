import React, {useState, useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Box, Button, FormControl, TextField, FormLabel} from '@material-ui/core/'
import CartItem from './CartItem'

const useStyles = makeStyles({
    
    box:{
        display: 'block',
        background: 'white',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginRight: "5px",
        marginLeft: "5px",
        borderRadius: '4px',
        boxShadow: "20 px 20px 10px #888888",
        marginTop: 10,
        padding: 10,
        width: "250px",
    },
    container:{
        display: 'inline-block',
        paddingTop: '10px',
        paddingBottom: '10px',
        textAlign: "center",
        width: "100%",
    },
    center:{
        textAlign: 'center',
        marginBottom: 5,
    },
    element:{
        display: 'block',
        alignItems: "center",
        textAlign: "center",
        marginBottom: '5px',
        padding: '0px',
    },
    button:{
        textAlign: "center",
        width: '100%',
    },

});


function Cart() {
    const classes = useStyles();

    const [pizzaList, setPizzaList] = useState([])
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    function updateState(){
        var updatedPizzaList = []
        Object.keys(localStorage).forEach((key)=>{
            updatedPizzaList = [...updatedPizzaList, JSON.parse(localStorage.getItem(key))]
        })
        setPizzaList(updatedPizzaList)
    }

    useEffect(()=>{
        updateState()

    },[])

    const showAllPizzas = () => {
        return(
            <div className={classes.container}>
                {pizzaList.map((pizza)=><CartItem pizza={pizza} updateState={updateState}></CartItem>)} 
                {pizzaCost()}

            </div>
            
        )

    }

    function validateForm(){
        return name.length > 0 && surname.length > 0 && email.length > 0 && address.length > 0 && phoneNumber.length > 0
    }

    function onChangeName(e){
        setName(e.target.value);
    }

    function onChangeSurname(e){
        setSurname(e.target.value);
    }

    function onChangeEmail(e){
        setEmail(e.target.value);
    }

    function onChangeAddress(e){
        setAddress(e.target.value);
    }

    function onChangePhoneNumber(e){
        setPhoneNumber(e.target.value);
    }

    function fetchOrder(order) {
        fetch('http://localhost:9090/pizzaorder/add', {
          method: 'post',
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(order)
          }).then(function (response) {
              if (!response.ok) {
                  return Promise.reject('some reason');
              }
            return response.json(); 
            }).then(function (responseData) {
              console.log({responseData})
                //TODO: FETCH
            });
      }

    function onSubmit(e){
        e.preventDefault();
        let pizzaOrder={
            name: name,
            surname: surname,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
            pizzas: pizzaList,

        }
        fetchOrder(pizzaOrder)


    }

    function getPizzasCost(){
        var totalCost = 0;
        pizzaList.map((pizza)=>{
            totalCost = totalCost + (pizza.quantity * pizza.cost)
        })
        return totalCost
    }

    const pizzaCost = () => {
        return(
        <div className={classes.element}>
            Koszt = {getPizzasCost()} zł
        </div>
        )
    }

    return (
            <Box className={classes.box} boxShadow={2}>
                <div className={classes.center}>Koszyk:</div>
                {showAllPizzas()}

                <form onSubmit={onSubmit}>
                    <FormControl className={classes.element} component="fieldset" variant="filled">
                        <FormLabel className={classes.element} component="legend">Imię</FormLabel>
                        <TextField  className={classes.element} value={name} onChange={onChangeName}></TextField>
                    </FormControl>
                    <FormControl className={classes.element} component="fieldset" variant="filled">
                        <FormLabel className={classes.element} component="legend" >Nazwisko</FormLabel>
                        <TextField className={classes.element} value={surname} onChange={onChangeSurname}></TextField>
                    </FormControl>
                    <FormControl className={classes.element} component="fieldset" variant="filled">
                        <FormLabel className={classes.element} component="legend" >Email</FormLabel>
                        <TextField className={classes.element} value={email} onChange={onChangeEmail}></TextField>
                    </FormControl>
                    <FormControl className={classes.element} component="fieldset" variant="filled">
                        <FormLabel className={classes.element} component="legend" >Adres</FormLabel>
                        <TextField className={classes.element} value={address} onChange={onChangeAddress}></TextField>
                    </FormControl>
                    <FormControl className={classes.element} component="fieldset" variant="filled">
                        <FormLabel className={classes.element} component="legend" >Numer telefonu</FormLabel>
                        <TextField className={classes.element} value={phoneNumber} onChange={onChangePhoneNumber}></TextField>
                    </FormControl>
                    <Button type="submit" className={classes.button} disabled={!validateForm()}>Złóż zamówienie</Button>
                </form>
            </Box>
    )
}

export default Cart
