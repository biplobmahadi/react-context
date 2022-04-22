import { useContext } from "react"
import { CounterContext } from "./counterContextProvider"

export const useCounterContext = () => {
    const {state, dispatch} = useContext(CounterContext)
    return {state, dispatch}
}
