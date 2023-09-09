import { createSlice } from "@reduxjs/toolkit";
const initialStateValue={comicsBtn:false,charBtn:false, searchVal:'',searchBtn:false,home:true}
export const storeSlice= createSlice({
    name:'navBtn',
    initialState:{value:initialStateValue},
    reducers:{
        changeFn:(state,action)=>{
            state.value=action.payload;
        },
    }
});

export const {changeFn}=storeSlice.actions
export default storeSlice.reducer;