import axios from "axios";

const API = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/posts/'
})
export default API