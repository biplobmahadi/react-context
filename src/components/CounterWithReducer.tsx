import React, { useReducer } from 'react'

// it can be many more state
const initialState = {
    count: 0
}

const counterReducer = (state: any, action: any) => {
    const {type, payload} = action;
    
    switch (type) {
        case 'Add':
            return {
                count: state.count + payload
            }
        case 'AddByFive':
            return {
                count: state.count + payload
            }
        default:
            return state;
    }
}

export default function CounterWithReducer() {
  // Reducer works like state
  // But when need update multiple state in multiple case, easy to use reducer insteed of state
  const [state, dispatch] = useReducer(counterReducer, initialState)
  // here state will be many more easily
  const {count} = state

  return (
    <React.Fragment>
        <div>CounterWithReducer</div>
        <h4>Reducer: {count}</h4>
        <button onClick={() => dispatch({type: 'Add', payload: 1})}>Add</button>
        <button onClick={() => dispatch({type: 'Add', payload: 5})}>Add 5</button>
    </React.Fragment>
  )
}
