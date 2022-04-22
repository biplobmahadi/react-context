import { IReducersAction } from "../../interfaces/common";
import { ICounterContextState } from "../../interfaces/counter";
import { ADD, ADDBYFIVE } from "../actions/counter";

export default function counterReducer(state: ICounterContextState, action: IReducersAction<number>){
    const {type, payload} = action;

    switch (type) {
        case ADD:
            return {
                count: state.count + payload
            }
        case ADDBYFIVE:
            return {
                count: state.count + payload
            }
        default:
            return state;
    }
}
