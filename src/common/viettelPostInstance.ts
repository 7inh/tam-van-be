import axios from "axios";

const viettelPostInstance = axios.create({
    baseURL: "https://partner.viettelpost.vn/v2",
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default viettelPostInstance;
