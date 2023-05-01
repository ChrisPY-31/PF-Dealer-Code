import { GETCOURSES,SEARCHCOURSE } from "./accions/accion_types";
initialState={
Courses:[],
CoursesOrigin:[]
}


export function reducer(state=initialState,accion) {
    switch (accion.type) {
        case GETCOURSES:
           return{
            Courses:accion.payload,
            CoursesOrigin:accion.payload
           }
           case SEARCHCOURSE:
            const Scourses= [state.CoursesOrigin]
            const Filter= Scourses.filter(C=>C.name.includes(accion.payload))
            return{
                Courses:Filter,
            }
        default:
        return{...state}
    }
}