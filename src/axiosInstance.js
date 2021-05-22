import axios from 'axios';

export default (history = null) => {
    // const baseUrl = "process.env.REACT_APP_BACKEND_URL";
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    console.log("BASEURL", baseURL);
    
    let headers = {};
    
    if(localStorage.token){
        headers.Authorization = `Bearer ${localStorage.token}`;
    }
    
    const axiosInstance = axios.create({
        baseYRL: baseURL,
        headers: {
            TOKEN: "TOKENTOKEN" // header add here
        }
    });
    
    axiosInstance.interceptors.response.use(
        (response) => 
        new Promise((resolve, reject) => {
            console.log("response", response)
            response.headers.Authorization = "Bearer TOKEN_EXAMPLE"; // in response obj
            resolve(response);
        }),
        (error) => {
            if(!error.response){
                return new Promise((resolve, reject) => {
                    reject(error);
                })
            }
    
            if(error.response.status === 404){
                localStorage.removeItem("token");
                if(history){
                    history.push("auth/login")
                }else{
                    window.location  = "auth/login"
                }
              
            }else{
                return new Promise((resolve, reject) => {
                    reject(error);
                })
            }
        }
    );
    return axiosInstance;
}
