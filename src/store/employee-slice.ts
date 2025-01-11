import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        employees: [],
    },
    reducers: {
        setEmployees(state, action) {
            state.employees = action.payload;
        },
    },
});

export const employeesActions = employeesSlice.actions;
export default employeesSlice;

