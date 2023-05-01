import { GETCOURSES, SEARCHCOURSE } from "./accion_types";
import {DB} from "../../../app/Home/db"
export function get_Courses() {
    return function (dispatch) {
        dispatch({
            type:GETCOURSES,
            payload:DB
        }
        )
    }
}
export function search_Courses(nombre) {
    return function (dispatch) {
        dispatch({
            type:SEARCHCOURSE,
            payload:nombre
        }
        )
    }
}