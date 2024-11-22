import { configureStore } from "@reduxjs/toolkit";
import { poemsSlice, PoemsState } from "./slices/poems";

export interface Store {
    poems: PoemsState;
}

const store = configureStore({
    reducer: {
        poems: poemsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;