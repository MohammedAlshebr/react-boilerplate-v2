import { configureStore } from "@reduxjs/toolkit";
import counter from "../slices/counter";
import users from "../slices/users";




const store = configureStore({
    reducer: { counter, users },
    devTools: process.env.NODE_ENV !== "production",

})

export default store
