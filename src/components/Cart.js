import React, { createContext, useEffect, useReducer } from "react";
import './cart.css';
import { products } from "./products";
import Context from "./Context";
import { reducer } from "./reducer";

export const CartContext = createContext();
const initialState = { 
    item: products,
    totalAmount: 0, 
    totalItem: 0
};
const Cart = () => {
    const[state, dispatch] = useReducer(reducer, initialState);
    const removeItem =(id)=>{
        return dispatch({
            type:"REMOVE",
            payload:id
        })
    }
    const increment = (id) => {
        return dispatch({ 
            type:"INCREMENT",
            payload:id,

        })
    }
    const decrement = (id) => {
        return dispatch({ 
            type:"DECREMENT",
            payload:id,

        })
    };
 // we will use the useEffect to update the data
 useEffect(() => {
    dispatch({ type: "TOTAL" });
    
  },[state.item]);
    
    return (
        <>
        <CartContext.Provider value={{...state, removeItem, increment, decrement}}>
        <Context />
        </CartContext.Provider>
      
           </>
    );
    };



export default Cart