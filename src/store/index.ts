import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice.ts";
import employeesSlice from "./employee-slice.ts";
import attendanceSlice from "./attendance-slide.ts";
import departmentSlice from "./department-slice.ts";


const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        employees: employeesSlice.reducer,
        attendance: attendanceSlice.reducer,
        departments: departmentSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


