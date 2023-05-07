import { categorias } from '@/app/Home/db';
import { createSlice } from '@reduxjs/toolkit';
let initialState = {
    courses:[],
    coursesOrigin:[],
    course:[],
    MyCourses:[],
    reset:[],
    myCategories:[],
    myCategoriesOrigin:[],
    Filter:[]
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
        getCategories:(state,action)=>{
             state.myCategories=action.payload;
        },
        search_Courses:(state, action)=>{
            const course=[...state.coursesOrigin];
            const filter= course.filter(c=>c.name.toLowerCase().includes(action.payload.toLowerCase()));
            state.courses=filter;
        },
        filters:(state,action)=>{
             
    },
        reset:(state,/* action */ )=>{
            const save= [...state.reset];
            state.courses=save;
        }
    }
});


// Action creators are generated for each case reducer function
export const { increment,getCourses,search_Courses,reset, getCategories,filters } = courseSlice.actions;
