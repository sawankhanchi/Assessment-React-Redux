import React from "react"
import { Provider } from "react-redux"
import { rootReducer } from "../reducers"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: rootReducer })

export function ReduxProvider({ children }) {

    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    )
}
