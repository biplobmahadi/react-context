import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function Counter() {
  const context = useContext(CounterContext)

  console.log('Counter rendered!')
  return (
      <React.Fragment>
          <div>Counter</div>
          <p>Value: {context.count}</p>
          <button onClick={() => context.setCount && context.setCount()}>Add</button>
      </React.Fragment>
  )
}

const CounterMemo = React.memo(Counter)
export default CounterMemo;