import { createSlice } from '@reduxjs/toolkit';

const initialState ={
   Detail:[],
   Name:''
}

export const getCursoIdSlice = createSlice({
    name: 'getCursoId',
    initialState,
    reducers: {
        getCourse: (state,  action  ) => {
            state.Detail = action.payload
        },
        getUserRegister:(state , action) =>{
            state.Name = action.payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { getCourse , getUserRegister} = getCursoIdSlice.actions;