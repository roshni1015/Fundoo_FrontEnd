import axios from "axios";

export const UserSignIn = (Obj) =>{
    console.log(Obj);
    return axios.post("http://localhost:1000/api/v1/users/login",Obj)
}

export const UserSignUp = (Obj) =>{
    console.log(Obj);
    return axios.post("http://localhost:1000/api/v1/users",Obj)
}