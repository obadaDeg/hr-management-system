import { createSlice } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
    name: "departments",
    initialState: {
        departments: [],
    },
    reducers: {
        setDepartments(state, action) {
            state.departments = action.payload;
        },
    },
});

export const departmentActions = departmentSlice.actions;
export default departmentSlice;
