import axios from "axios";

const $host = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    proxy:
    {
        host:process.env.REACT_APP_API_URL,
        port:5000
    }
})
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}  