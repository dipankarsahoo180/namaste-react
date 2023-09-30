import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice(
    {
        name:'allUser',
        initialState:{
            items:["John","David","Glenn"]
        },
        reducers:{
            //mutating the state here
            addItem:(state,action)=>{
                state.items.push(action.payload)
            },
            removeItem: (state,action)=>{
                state.items.pop(action.payload)
            },
            clearCart:(state,action)=>{
                state.items.length = 0;
            }
        }
    }
)

export const {addItem,removeItem,clearCart} = peopleSlice.actions;

export default peopleSlice.reducer;