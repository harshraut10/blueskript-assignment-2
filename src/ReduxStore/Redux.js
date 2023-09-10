import { createSlice } from "@reduxjs/toolkit";
const initialStateValue={
    comicsBtn:false,charBtn:false, searchVal:'',searchBtn:false,home:true,viewData:[] , //for navigation
    name:false,date:false,asc:false,dsc:false, //dropdown states for character section
   coDate:false, coFocDate:false, coOSD:false, coIN:false, coAsc:false,coDsc:false //dropdown states for comics section
   
}
    
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