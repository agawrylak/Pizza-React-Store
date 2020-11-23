import axios from "axios";

export const PizzaOrderAPI = {
  postPizzaOrder(pizzaOrder) {
    const url = "http://localhost:9090/ingredient/add";
    return axios.post(url, pizzaOrder);
  },
};
