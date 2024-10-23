import { createSlice } from "@reduxjs/toolkit"; 
import { listCases } from "./data"; 

 const CaseSlice=createSlice({
 initialState:listCases,
 name:'cases'
})  

export default CaseSlice.reducer;

