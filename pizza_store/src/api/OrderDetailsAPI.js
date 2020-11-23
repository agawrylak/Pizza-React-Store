import axios from "axios";

export const OrderDetailsAPI = {
  postOrderDetails(orderDetails) {
    const url = "http://localhost:9090/orderdetails/add";
    return axios.post(url, orderDetails);
  },
};
