import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice(
    {
        name : 'cart',
        initialState : [],
        reducers: {
            add:(state,action)=>{
                state.push(action.payload)
            }
        }
    }
)

export const {add} = Cartslice.actions ;
export default Cartslice.reducer ;