
import {combineReducers} from "redux"
import { particularProductDetailReducer, productReducer } from './ProductsReducer'
import { userReducer } from "./userReducer"

export const rootReducer=combineReducers({
    //pass all the reducers here
    // productReducerYahaSeHandle:productReducer  //-->it has state named products
    products:productReducer , //-->it has state named products
    particularproduct:particularProductDetailReducer  ,
    users:userReducer 
})


//these names will be given in redux dev tool, not real state name which are defined in reducer
//yhi naam use selector pe use kiye jaayenge