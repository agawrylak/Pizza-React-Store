import React, {useEffect, useState} from 'react'
import '../App.css';
import PizzaContainer from './PizzaContainer';
import Nav from './Nav'
import Creator from './Creator'
import {Route, HashRouter} from 'react-router-dom'
import Login from './Login'
import Cart from './Cart'


function App() {
  const [pizzas, pizzasState] = useState([]);
  const [ingredients, ingredientsState] = useState([]);


  const fetchPizzas = () => {
          
    var url = 'http://localhost:9090/pizza/all'
    fetch(url)
        .then((response) => response.json())
        .then((data) => pizzasState(data))

  }

  const fetchIngredients = () => {

  var url = 'http://localhost:9090/ingredient/all'
    fetch(url)
      .then((response) => response.json())
      .then((data) => ingredientsState(data))
      console.log(ingredients)

  }


  useEffect(() => {

    fetchPizzas();
    fetchIngredients();


  },[])


  return (
    <div>
        <HashRouter>
          <Nav></Nav>
          <div className="content">
            <Route path="/create" render={(props) => (
            <Creator fetchIngredients={fetchIngredients()} ingredients={ingredients} fetchPizzas={fetchPizzas()}></Creator>)}/>
            <Route path="/order" render={(props) => (
            <PizzaContainer fetchIngredients={fetchIngredients} fetchPizzas={fetchPizzas}></PizzaContainer>)}/>
            <Route path="/login" component={Login}/>
            <Route path="/cart" component={Cart}/>

          </div>
        </HashRouter>

    </div>
  );
}

export default App;
