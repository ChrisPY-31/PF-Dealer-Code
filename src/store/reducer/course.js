import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    increment : 0
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = courseSlice.actions;