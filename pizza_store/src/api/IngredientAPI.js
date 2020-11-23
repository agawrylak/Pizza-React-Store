import axios from "axios";

export const IngredientAPI = {
  postIngredient(ingredient) {
    const url = "http://localhost:9090/ingredient/add";
    return axios.post(url, ingredient);
  },

  getAllIngredients() {
    const url = "http://localhost:9090/ingredient/all";
    return axios.get(url);
  },

  deleteIngredient(ingredientID) {
    const url = "http://localhost:9090/ingredient/delete/${ingredientID}";
    return axios.delete(url);
  },
};
