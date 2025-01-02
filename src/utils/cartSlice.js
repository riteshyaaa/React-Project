
import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
    addItem : (state, action ) => {
          // Redux Toolkit uses immer BTS
        state.items.push(action.payload);
    },
    removeItem:(state) => {
        state.items.pop();    
    },
    clearCart:(state) => {
           //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
       
    }

}

})
export default cartSlice.reducer;
export const { addItem, removeitem, clearCart} = cartSlice.actions;