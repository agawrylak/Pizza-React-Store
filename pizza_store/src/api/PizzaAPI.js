import axios from "axios";

export const PizzaAPI = {
  getAllPizzas() {
    const url = "http://localhost:9090/pizza/all";
    return axios.get(url);
  },

  postPizza(pizza) {
    const url = "http://localhost:9090/pizza/add";
    return axios.post(url, pizza);
  },
};
