import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  ingredient: {
    padding: "1px",
    margin: "2px",
    "&:hover": {
      background: "Gainsboro",
    },
  },
  icon: {
    width: 2,
    height: 2,
    float: "right",
  },
});

function Ingredient(props) {
  const classes = useStyles();

  function handleDeleteOnClick() {
    //TODO: DELETEINGREDIENT HERE
  }

  return (
    <div className={classes.ingredient}>
      {props.ingredient.name}
      <IconButton
        onClick={handleDeleteOnClick}
        position="right"
        className={classes.icon}
      >
        <Delete />
      </IconButton>
    </div>
  );
}

export default Ingredient;
