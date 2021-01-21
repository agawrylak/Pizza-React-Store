import React, { useEffect, useState } from "react";
import "../App.css";
import PizzaContainer from "./PizzaContainer";
import Nav from "./Nav";
import Creator from "./Creator";
import { Route, HashRouter } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
import { PizzaAPI } from "../api/PizzaAPI";
import { IngredientAPI } from "../api/IngredientAPI";
import Register from "./Register";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  function changeUsername(username){
    setUsername(username);
  }

  function changePassword(password){
    setPassword(password);
  }
  function fetchPizzas() {
    return PizzaAPI.getAllPizzas().then((response) => setPizzas(response.data));
  }

  function fetchIngredients() {
    return IngredientAPI.getAllIngredients().then((response) =>
      setIngredients(response.data)
    );
  }

  useEffect(() => {
    fetchIngredients().then((r) => console.log(r));
    fetchPizzas().then((r) => console.log(r));
  }, []);

  return (
    <div>
      <HashRouter>
        <Nav />
        <div className="content">
          <Route
            path="/create"
            render={(props) => (
              <Creator
                fetchIngredients={fetchIngredients}
                ingredients={ingredients}
                fetchPizzas={fetchPizzas}
              />
            )}
          />
          <Route
            path="/order"
            render={(props) => (
              <PizzaContainer
                fetchIngredients={fetchIngredients}
                fetchPizzas={fetchPizzas}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
