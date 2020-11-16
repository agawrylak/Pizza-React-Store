import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {TextField, Button, Box, Checkbox, FormControl, InputLabel, FormHelperText, Input, FormControlLabel, Radio, RadioGroup, FormLabel} from "@material-ui/core"

const useStyles = makeStyles({
    box:{
        display: 'inline-block',
        background: 'white',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginRight: "5px",
        marginLeft: "5px",
        borderRadius: '4px',
        boxShadow: "20 px 20px 10px #888888",
        width: "100%",
        marginTop: 10,
    },
    title:{
        textAlign: "center",
        marginBottom: 10,
    },
    center:{
        textAlign: "center",
        width: '100%',
    },
    form:{
        justifyContent: 'center',
        textAlign: 'center',
    },
    textfield:{
        margin: '10px',
    },
    checkbox:{
        margin: 0,
    
    }

});

function PizzaForm(props) {
    const classes = useStyles();
    const [pizzaIngredients, pizzaIngredientsState] = useState([]);
    const [pizzaName, pizzaNameState] = useState('');

    function fetchPizza(pizzaData) {
      fetch('http://localhost:9090/pizza/add', {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(pizzaData)
        }).then(function (response) {
            if (!response.ok) {
                return Promise.reject('some reason');
            }
          return response.json(); 
          }).then(function (responseData) {
            console.log({responseData})
            props.fetchPizzas()

          });
    }

    function onSubmit(e) {
        e.preventDefault();
        const pizzaPOJO = {
          name: pizzaName,
          ingredients: [],
        }

        for(var i=0;i<pizzaIngredients.length;i++) {
            

            pizzaPOJO.ingredients.push(pizzaIngredients[i])
        }
        fetchPizza(pizzaPOJO)
          
      }


    function handleCheckboxChange(e) {
        if(!(pizzaIngredients.includes(e.target.value))){
            pizzaIngredientsState([...pizzaIngredients, e.target.value])
        }else{
            let filteredArray = pizzaIngredients.filter(ingredient => ingredient.name !== e.target.value)
            pizzaIngredientsState(filteredArray)
        }
        
    }

    const ingredientRadio = (ingredientName) => {
        return(
            <FormControlLabel classname={classes.checkboxes} value = {ingredientName}  control={<Checkbox onChange={handleCheckboxChange}/>} label= {ingredientName} />
        )
    
    }

    const allIngredientRadios = () => {
        return(
            <FormControl  component="fieldset" variant="filled">
                <FormLabel component="legend">Składniki</FormLabel>
                {props.ingredients.map((ingredient) => ingredientRadio(ingredient.name))}
            </FormControl>
        )
    }

    function onChangeName(e){
        pizzaNameState(e.target.value);
    }

    return (
        <div>
            <Box className={classes.box} boxShadow={2} >
                <div className={classes.title}> Pizza: </div>
                <form className={classes.form} onSubmit={onSubmit}>
                    <FormControl component="fieldset" variant="filled">
                        <FormLabel component="legend" className={classes.center} >Nazwa</FormLabel>
                        <TextField className={classes.textfield} value={pizzaName} onChange={onChangeName}></TextField>
                        {allIngredientRadios()}
                    </FormControl>
                    <div className={classes.center}>
                    <Button type="submit" className={classes.center}> Wyślij </Button>
                    </div>
                </form>
            </Box>
        </div>
    )
}

export default PizzaForm
