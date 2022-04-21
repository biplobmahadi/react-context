import React, { useState } from 'react';
import './App.css';
import HomeMemo from './components/Home';
import { CounterContextProvider } from './context/CounterContext';

function Appp() {

  const [state, setState] = useState({
    count: 0,
    setCount: () => setState((prev) => {
      return {
        ...prev, 
        count: prev.count + 1
      }
    })
  });

  console.log('App rendered!')
  return (
    <div className="App">
      <CounterContextProvider value={state}>
        <HomeMemo />
      </CounterContextProvider>
    </div>
  );
}

const App = React.memo(Appp);
export default App;