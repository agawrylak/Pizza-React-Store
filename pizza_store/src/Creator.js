import React from 'react'
import PizzaForm from './Pizza/PizzaForm'
import IngredientForm from './Ingredient/IngredientForm'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    creator: {
        display: 'flex',
        flexWRap: 'wrap',
        flexDirection: 'row',
        alignItems: 'top',
        justifyContent: 'left',
        marginRight: "100px"
    },
});

function Creator(props) {
    const classes = useStyles();

    return (
        <div className={classes.creator}>
            <PizzaForm ingredients={props.ingredients} fetchPizzas={props.fetchPizzas}></PizzaForm>
            <IngredientForm fetchIngredients={props.fetchIngredients} ingredients={props.ingredients}/>
        </div>
    )
}

export default Creator
