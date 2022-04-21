import React, { useState } from 'react'

export default function CounterWithState() {
  
  const [count, setCount] = useState<number>(0)
  // it can be many more state  

  const handleAdd = () => {
      setCount(prevCount => prevCount+1)
  }
  const handleMinus = () => {
      setCount(prevCount => prevCount-1)
  }
  const handleAddByFive = () => {
    setCount(prevCount => prevCount + 5)
  }
  const handleAddByTen = () => {
    setCount(prevCount => prevCount + 10)
  }
  const handleMinusByFifteen = () => {
    setCount(prevCount => prevCount - 15)
  }

  return (
      <React.Fragment>
          <div>CounterWithState</div>
          <h4>{count}</h4>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleAddByFive}>Add 5</button>
          <button onClick={handleAddByTen}>Add 10</button>
          <button onClick={handleMinus}>Minus</button>
          <button onClick={handleMinusByFifteen}>Minus 15</button>
      </React.Fragment>
  )
}
