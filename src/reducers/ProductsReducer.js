// In Redux, constants are typically used to define action types.
//  Action types are string values that describe the type of action being performed in
//an application. Constants help ensure consistency and avoid typos or errors
//when referring to action types throughout the application.

// Constants are often defined as variables with uppercase names and string values.

// S E E  B O T T O M

import {
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PARTICULAR_PRODUCT_FAIL,
  PARTICULAR_PRODUCT_REQUEST,
  PARTICULAR_PRODUCT_SUCCESS,
} from "../constants/ProductConstants";

//In a typical Redux application, you should call APIs (server requests) inside action creators and not inside reducers
//. The actions in Redux are responsible for triggering changes to the application state, whereas reducers are
// responsible for handling those changes.

// Reducers are pure functions that specify how the application's state should change in response to dispatched actions.
// They take the current state and an action as inputs and return a new state.

//   REDUCER FOR ALL PRODUCTS to display at home
//initially state has empty array of products
export const productReducer = (state = { products: [] }, action) => {
  switch (
    action.type //according to action type, respective reducer will be called
  ) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      }; //return means save in our store, aur fir store ye saved states ko bhjega components ko

    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payloadamaandata.fetchedProduct, //we get from action
        productCount: action.payloadamaandata.productCount,
        kitnaperpage:action.payloadamaandata.kitnaperpage,
        filteredProductsCount:action.payloadamaandata.filteredProductsCount
      };

    case ALL_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payloadamaandata,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//REDUCER FOR A PARTICULAR PRODUCT

export const particularProductDetailReducer = (state = { particularproduct: [] }, action) => {
  switch (
    action.type //according to action type, respective reducer will be called
  ) {
    case PARTICULAR_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state
      }; //return means save in our store, aur fir store ye saved states ko bhjega components ko

    case PARTICULAR_PRODUCT_SUCCESS:
      return {
        loading: false,
        particularproduct: action.payloadamaandata, //we get from action
        
      };

    case PARTICULAR_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payloadamaandata,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// what is happening?  --> 1)components asks data from store using dispatch functions and useselectors , dispatch shuru krne ke leye and use selector for getting data
// 2)  action works and do the work of api call and all (jo bhi call kiya gya ho by help of use dispatch)
// 3) reducer is called as per the action(jo action call hua uska reducer chelga) and update the store state
// 4) we finally got the data from the store`s state by use selector
