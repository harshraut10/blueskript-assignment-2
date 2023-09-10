import { createSlice } from "@reduxjs/toolkit";
const initialStateValue={comicsBtn:false,charBtn:false, searchVal:'',searchBtn:false,home:true,viewData:[] ,
name:false,date:false,asc:false,dsc:false,
coDate:false, coFocDate:false, coOSD:false, coIN:false, coAsc:false,coDsc:false

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