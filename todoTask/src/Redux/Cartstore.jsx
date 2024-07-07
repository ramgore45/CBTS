import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slice/Cartslice";

export const Cartstore = configureStore(
    {
        reducer:{
            cart:Cartslice
        }
    }
)