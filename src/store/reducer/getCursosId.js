import { createSlice } from '@reduxjs/toolkit';

const initialState ={
   Detail:[],
   Name:'',
   dashboard:''
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
        },
        getDashboard: (state , action) =>{
            console.log(action.payload)
            state.dashboard = action.payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { getCourse , getUserRegister , getDashboard} = getCursoIdSlice.actions;