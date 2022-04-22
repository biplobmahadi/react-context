import { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import { IContextProviderProps } from "../../../interfaces/common";
import counterReducer from "../../reducers/counter";

export const CounterContext = createContext<any>(null);

export function CounterContextProvider({children}: IContextProviderProps) {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
         <CounterContext.Provider value={{state, dispatch}}>
            {children}
         </CounterContext.Provider>
    )
}
