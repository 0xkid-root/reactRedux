import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:0};

export const showSlice = createSlice({
    name:'showData',
    initialState,
    reducers:{
        showData:(state)=>{
            state.value = state.value;
        },
        increment:(state)=>{
            state.value = state.value +1;
        },
        incrementByvalue:(state,action)=>{
            state.value = state.value  + action.payload;
        },

    },
})

export const {increment,showData,incrementByvalue} = showSlice.actions;

export default showSlice.reducer;