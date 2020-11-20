import React, {useState} from 'react'
import Ingredients from './Ingredients'
import {TextField} from '@material-ui/core'
import {Box} from '@material-ui/core'
import { shadows } from '@material-ui/system';
import {makeStyles} from "@material-ui/core/styles"
import {Checkbox, Button, FormControl, InputLabel, FormHelperText, Input, FormControlLabel, Radio, RadioGroup, FormLabel} from "@material-ui/core"

const useStyles = makeStyles({
    ingredients: {
        background: 'white',
        margin: "10px",
        padding: "10px",
        borderRadius: '4px',
        boxShadow: "20 px 20px 10px #888888",
        width: "100%",
        marginLeft: "15px"
    },
    center: {
        textAlign: 'center',
    },
    form:{
        justifyContent: 'center',
        textAlign: 'center',
    },
    
});

function IngredientForm(props) {

    const classes = useStyles();
    const [ingredientName, ingredientNameState] = useState(null);
    

    function fetchIngredient(ingredientData) {
      fetch('http://localhost:9090/ingredient/add', {
        method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(ingredientData)
        }).then(function (response) {
            if (!response.ok) {
                return Promise.reject('some reason');
            }
          return response.json(); 
          }).then(function (responseData) {
            console.log({responseData})
            props.fetchIngredients()

          });
    }


    function onSubmit(e) {
      e.preventDefault();
      const pizzaIngredient = {
        name: ingredientName
      }
      fetchIngredient(pizzaIngredient)
      console.log(pizzaIngredient.name)
        
    }

    function onChangeName(e){
        ingredientNameState(e.target.value);
    }

    return (
        <div>
            <Box className={classes.ingredients} boxShadow={2} >            
                <Ingredients fetchIngredients={props.fetchIngredients} ingredients={props.ingredients}/>
                <form className={classes.form} onSubmit={onSubmit}>
                    <FormControl classname = {classes.form} component="fieldset" variant="filled">
                    <FormLabel component="legend" className={classes.center} >Nowy składnik</FormLabel>
                        <TextField value={ingredientName} onChange={onChangeName}></TextField>
                    </FormControl>
                    <div className={classes.center}>
                    <Button type="submit" className={classes.center}> Wyślij </Button>

                    </div>
    
                </form>
            </Box>

        </div>
    )
}

export default IngredientForm
