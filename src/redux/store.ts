import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userslice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer : {
        [userSlice.name] : userSlice.reducer,
    }
});

type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch);

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;