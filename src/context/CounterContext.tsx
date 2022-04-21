import React, { useContext } from "react";

interface Obj {
    count?: number;
    setCount?: Function;
}

interface Props {
    value: Obj;
    children: JSX.Element;
}

const CounterContext = React.createContext<Obj>({});

export function CounterContextProvider({value, children}: Props) {
    return (
         <CounterContext.Provider value={value}>
            {children}
         </CounterContext.Provider>
    )
}

export function useCounterContext(){
    const value = useContext(CounterContext);
    return value;
}

