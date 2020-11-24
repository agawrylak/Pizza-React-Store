import axios from "axios";

export const PizzaOrderAPI = {
  postPizzaOrder(pizzaOrder) {
    const url = "http://localhost:9090/pizzaorder/add";
    return axios.post(url, pizzaOrder);
  },
};
