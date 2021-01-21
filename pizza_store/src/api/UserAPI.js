import axios from "axios";



export const UserAPI = {



    registerUser(user) {
        const url = "http://localhost:9090/register";
        return axios.post(url, user);
    },

    loginUser(user) {
        const url = "http://localhost:9090/login";
        return axios.post(url, user);
    }
};
