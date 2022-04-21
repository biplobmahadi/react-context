import React from 'react'
import { useCounterContext } from '../context/CounterContext'

function Counter() {
  const {count, setCount} = useCounterContext()

  console.log('Counter rendered!')
  return (
      <React.Fragment>
          <div>Counter</div>
          <p>Value: {count}</p>
          <button onClick={() => setCount && setCount()}>Add</button>
      </React.Fragment>
  )
}

const CounterMemo = React.memo(Counter)
export default CounterMemo;