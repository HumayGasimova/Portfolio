let BASE_URL = "http://localhost:8080";

//check the environment 
if(process.env.ENVIRONMENT === "development"){
    BASE_URL = "http: //dev.project.com"
}

if(process.env.ENVIRONMENT === "production"){
    BASE_URL = "http: //prod.project.com"
}

export {BASE_URL};
