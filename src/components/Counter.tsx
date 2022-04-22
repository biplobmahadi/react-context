import React from 'react'
import { add, addByFive } from '../store/actions/counter';
import { useCounterContext } from '../store/context/counterContext'

function Counter() {
  const {state, dispatch} = useCounterContext()
  const {count} = state;

  return (
      <React.Fragment>
          <div>Counter</div>
          <p>Value: {count}</p>
          <button onClick={() => dispatch(add(1))}>Add</button>
          <button onClick={() => dispatch(addByFive(5))}>Add 5</button>
      </React.Fragment>
  )
}

const CounterMemo = React.memo(Counter)
export default CounterMemo;