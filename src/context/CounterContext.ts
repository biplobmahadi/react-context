import React from "react";

interface Obj {
    count?: number;
    setCount?: Function;
}

export const CounterContext = React.createContext<Obj>({})

