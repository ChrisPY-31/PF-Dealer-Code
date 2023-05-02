import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    nav:[],
    login: false,
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        getlogin:(state) =>{
            state.login = !state.login
        }
       
    }
});


// Action creators are generated for each case reducer function
export const { increment , getlogin} = courseSlice.actions;