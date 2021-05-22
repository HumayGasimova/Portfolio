// 2nd way of interceptor. Use it in index.js (instead of axiosInstance)
import axios from 'axios';

axios.interceptors.request.use(request => {
    // req.headers.Authroization = "Bearer jjjjj"
    console.log("APP",request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    // req.headers.Authroization = "Bearer jjjjj"
    console.log("APP",response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
})
