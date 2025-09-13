import axios from "axios";

export let client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})