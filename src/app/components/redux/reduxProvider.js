"use client"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./store";

import store from "./store"

export function Providers ({children}){
    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
        </Provider>
    )
    //<Provider store={store}>{children}</Provider>;
}