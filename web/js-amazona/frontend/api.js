import axios from 'axios';
import { apiURL } from "./config";

export const getProduct = async (id) => {    
    try {
        const response = await axios({
            url: `${apiURL}/api/product/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        if (response.statusText !== "OK") {
            throw new Error(response.data.message);
        }

        return response.data;
    } catch(error) {
        return {
            error: error.response.data.message || error.message
        }
    }
}