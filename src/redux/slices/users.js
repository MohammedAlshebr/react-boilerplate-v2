import { createSlice } from "@reduxjs/toolkit";


const usersDefalutState = [{
    firstName: "John",
    lastName: "Snow",
    age: "30",
    nationalty: "british"
}, {
    firstName: "Edward",
    lastName: "Stark",
    age: "24",
    nationalty: "german"
}, {
    firstName: "Rob",
    lastName: "Stark",
    age: "25",
    nationalty: "british"
}, {
    firstName: "Sersi",
    lastName: "Lanster",
    age: "33",
    nationalty: "french"
}]

const users = createSlice({
    name: "users",
    initialState: usersDefalutState,
    reducers: {
        addUser: (state, action) => {
            return [...state, action.payload]
        }
    },

})

export default users.reducer;
export const { addUser } = users.actions

export const getUsers = () => {
    return async (dispatch, getState) => {
        setTimeout(() => {
            dispatch(addUser({}))
        }, 5000);

    }
}
