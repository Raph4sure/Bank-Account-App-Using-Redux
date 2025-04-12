import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    natinalID: "",
    createdAt: "",
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return { payload: { fullName, nationalID, createdAt: new Date ().toISOString() } };
            },

            reducer(state, action) {
                state.fullName = action.payload.fullName;
                state.natinalID = action.payload.natinalID;
                  state.createdAt =  action.payload.createdAt
            },
        },

        updateName(state, action) {
            state.fullName = action.payload;
        },
    },
});


export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;


