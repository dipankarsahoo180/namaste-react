import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:'cart',
        initialState:{
            items:[]
        },
        reducers:{
            //mutating the state here
            addItem:(state,action)=>{
                state.items.push(action.payload)
            },
            removeItem: (state,action)=>{
                console.log('payload',action.payload);
                console.log('state.items',state.items);
                state.items = state.items.filter((el)=>el?.card?.info.id != action.payload?.card?.info.id);
            },
            clearCart:(state,action)=>{
                state.items.length = 0;
            }
        }
    }
)

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;