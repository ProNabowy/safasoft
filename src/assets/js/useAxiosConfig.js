import axios from "axios";
import { baseUrl } from "./constants.js";
import { getCookie } from "./utils.jsx";

/**
 * Configures axios with default headers and interceptors.
 * Sets loading state to true when a request starts and to false when a response is received or an error occurs.
 *
 * @param {function} setIsLoading - Function to set loading state.
 * @returns {object} Empty object.
 */
const addHeaderToAxios = () => {
    // Get the auth token from the cookie
    const AUTH_TOKEN = getCookie('token');

    // Set the base URL for axios requests
    axios.defaults.baseURL = baseUrl;

    // Set the authorization header with the auth token
    axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

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