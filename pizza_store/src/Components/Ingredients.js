import React from 'react'
import Ingredient from './Ingredient'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    title:{
        textAlign: 'center'
    },
    ingredients: {
        margin: '10px'
    },
});

function Ingredients(props) {

    const classes = useStyles();

    const showIngredients = (ingredients) => {
        return(
        
        ingredients.map(ingredient => <Ingredient ingredient={ingredient} />))
        
    }

    return (
        <div>
        <div className={classes.title}>
            Składniki:
        </div>
        <div className={classes.ingredients}>{showIngredients(props.ingredients)}</div>
        </div>
    )
}

export default Ingredients
