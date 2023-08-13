import React, { createContext, useContext, useReducer } from 'react'


export const stateContext = createContext()



export default function StateProvider({ children, reducer, initielstate }) {

    return (
        <stateContext.Provider value={useReducer(reducer, initielstate)} >
            {children}
        </stateContext.Provider >
    )
}
export const useStateValue = () => useContext(stateContext)