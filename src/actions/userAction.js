
import{LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,CLEAR_ERRORS,REGISTER_SUCCESS,REGISTER_FAIL,REGISTER_REQUEST} from "../constants/userConstants"

import axios from "axios"
//dispatch by name of action function from component , action does its work  then dispatvh from action to reducer then reducer save in store
//use selector to get state from reducer ,

export const loginUser=(em,pass)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})  //for loader to reducer
  
        const {data}=await axios.post(`api/v1/user/login`,{

            email:em,
            password:pass,
            headers: { "Content-Type": "application/json" }
        });
            
        
                                                       
        dispatch({type:  LOGIN_SUCCESS,  payloadData:data.user}) //sent to reducer, so that it can update
        console.log(data.user,"amaan")
        
    } catch (error) {
        dispatch({
          type:LOGIN_FAIL,
          payloadData:error.response.data.message //The expression error.response.data.message is commonly used when handling errors from API responses in JavaScript applications, especially when using libraries like Axios for making HTTP requests.
        })
    }
}

export const registerUser=(name,email,password,avatar)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_REQUEST})

        // const name = us.get('name');
        // const email = us.get('email');
        // const password = us.get('password');
        // const avatar = us.get('avatar');
        console.log(name, email, password)
        
        ///from here not working
        const { data } = await axios.post(`api/v1/user/register`,{
        
                name:name,
                email:email,
                password:password,
                avatar:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
                headers: { "Content-Type": "multipart/form-data" } 
        });
        console.log(data)
        
        dispatch({type:REGISTER_SUCCESS,payloadData:data.user});
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payloadData:error.response.data.message //The expression error.response.data.message is commonly used when handling errors from API responses in JavaScript applications, especially when using libraries like Axios for making HTTP requests.
          })
    }
}

export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS })
}