//import axios
import Axios from 'axios';

const axios = Axios.create({
    //set default endpoint API
    baseURL: process.env.NEXT_PUBLIC_API_BACKEND
})

export default axios;