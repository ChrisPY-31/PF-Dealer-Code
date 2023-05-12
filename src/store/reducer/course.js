import { createSlice } from '@reduxjs/toolkit';
let initialState = {
    courses:[],
    coursesOrigin:[],
    course:[],
    favCourse:[],
    MyCourses:[],
    reset:[],
    myCategories:[],
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
        search_Courses:(state, action)=>{
            const course=[...state.coursesOrigin];
            const filter= course.filter(c=>c.name.toLowerCase().includes(action.payload.toLowerCase()));
            state.courses=[...filter]
        },
        getCategories:(state,action)=>{
             state.myCategories=action.payload;
        },
        Order:(state,action)=>{
            if (action.payload==="Recomendados") {
              const coursesA=state.Filter.length?[...state.Filter]:[...state.coursesOrigin]
              let orden= coursesA.sort((a,b)=>{
                console.log("hola")
                if (a.rating > b.rating) {
                  return -1;
                }
                if (a.rating <= b.rating) {
                  return 1;
                }
                return 0;
              }
              )
            state.courses=[...orden]
            }
           if(action.payload==="Populares"){
            const coursesA=state.Filter.length?[...state.Filter]:[...state.coursesOrigin]
            let orden= coursesA.sort((a,b)=>{
              console.log("hola")
              if (a.students > b.students) {
                return -1;
              }
              if (a.students <= b.students) {
                return 1;
              }
              return 0;
            }
            )
          state.courses=[...orden]
           }
        },
        Order2:(state,action)=>{
            if(action.payload==="MayorPrecio"){ 
                console.log("hola")
                const coursesA=state.Filter.length?[...state.Filter]:[...state.coursesOrigin]
                let orden= coursesA.sort((a,b)=>{
                 
                  if (a.price > b.price) {
                    return -1;
                  }
                  if (a.price <= b.price) {
                    return 1;
                  }
                  return 0;
                }
                )
              state.courses=[...orden]
            }
            if(action.payload==="MenorPrecio"){
                const coursesA=state.Filter.length?[...state.Filter]:[...state.coursesOrigin]
                const orden= coursesA.sort((a,b)=>{
                    if (a.price < b.price) {
                      return -1;
                    }
                    if (a.price >= b.price ) {
                      return 1;
                    }
                    return 0;
                  }
                  )
                  state.courses=[...orden]
            }
            if(action.payload==="Gratis"){
                const coursesA=state.Filter.length?[...state.Filter]:[...state.coursesOrigin]
                const orden= coursesA.filter(f=>f.price===0)
                if(orden.length){
                state.courses=[...orden]
              }else{
                window.alert("No hay")
              }
            }
        },
        reset:(state,/* action */ )=>{
            const save= [...state.reset];
            state.courses=save;
        }
    }
});


// Action creators are generated for each case reducer function
export const { increment,getCourses,search_Courses,reset, getCategories, filters, Order, Order2} = courseSlice.actions;
