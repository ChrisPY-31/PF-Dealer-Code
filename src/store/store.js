import { configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./reducer/course";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

export const store = configureStore({
    reducer: {
        course: courseSlice.reducer
    }   
}
)

export function useAppDispatch() {
    return useDispatch();
  }
  
  export function useAppSelector(selector) {
    return useMemo(() => selector(store.getState()), [selector]);
  }