import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    increment : 0,
    courses:[],
    coursesOrigin:[],
    course:[],
    MyCourses:[],
    reset:[]
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {

        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
        getCourses:(state, action)=>{
            state.courses=action.payload;
            state.coursesOrigin=action.payload;
            state.reset=action.payload;
        },
        search_Courses:(state, action)=>{
            const course=[...state.coursesOrigin];
            const filter= course.filter(c=>c.name.toLowerCase().includes(action.payload.toLowerCase()));
            state.courses=filter;
        },
        reset:(state,/* action */ )=>{
            const save= [...state.reset];
         state.courses=save;
        }
    }
});


// Action creators are generated for each case reducer function

export const { increment,getCourses,search_Courses,reset } = courseSlice.actions;
