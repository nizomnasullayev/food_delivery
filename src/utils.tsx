import axios from "axios";

export let client = axios.create({
    baseURL: "http://localhost:3000",
})