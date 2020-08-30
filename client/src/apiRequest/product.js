import { config } from "../utils/constant";
import Axios from "axios";

export const getProducts= async()=>{
    try {
        let response= await Axios.get(`${config.baseURL}/products`)
        return response.data;
    } catch (error) {
        return error;
    }
}