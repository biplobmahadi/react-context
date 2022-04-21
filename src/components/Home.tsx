import React from 'react'
import CounterWithReducer from './CounterWithReducer';
import CounterWithState from './CounterWithState';

function Home() {

  return (
      <React.Fragment>
          <div>Home</div>
          <CounterWithState/>
          <CounterWithReducer/>
      </React.Fragment>
  )
}

const HomeMemo = React.memo(Home)
export default HomeMemo;