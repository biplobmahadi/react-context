import { ADD, ADDBYFIVE } from "./actionType"

export const add = (payload: number) => {
    return {
        type: ADD,
        payload: payload
    }
}

export const addByFive = (payload: number) => {
    return {
        type: ADDBYFIVE,
        payload: payload
    }
}
