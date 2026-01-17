import axios from "axios";

// Hardcoded for now, or use import.meta.env.VITE_API_URL
const baseURL = "http://localhost:8000/api/v1";

const client = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;
