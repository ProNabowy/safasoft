import axios from "axios";
import { baseUrl } from "./constants.js";

const addHeaderToAxios = () => {
    // Set the base URL for axios requests
    axios.defaults.baseURL = baseUrl;

    // Set the accept-language header to english
    axios.defaults.headers.common['Accept-Language'] = 'en';

    // Set the content-type header to multipart/form-data
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data;';

    // Set the accept header to application/json
    axios.defaults.headers.common['Accept'] = 'application/json';

    // Return an empty object
    return {};
};


export {
    addHeaderToAxios
}