import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import peopleSlice from "./peopleSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        people: peopleSlice
    }
})

export default appStore;