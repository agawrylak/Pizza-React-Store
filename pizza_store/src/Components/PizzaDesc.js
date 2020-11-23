import React from "react";

function PizzaDesc({ ingredients }) {
  var listOfIngredients = ingredients.map((ingredient, index, array) => {
    if (index === array.length - 1) {
      return ingredient.name;
    }

    return ingredient.name + ", ";
  });

  return (
    <div>
      {" Składniki: "}
      {listOfIngredients}
    </div>
  );
}

export default PizzaDesc;
