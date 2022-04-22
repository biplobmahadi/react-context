import React from 'react';
import './App.css';
import HomeMemo from './components/Home';
import { CounterContextProvider } from './store/context/counterContext';

function Appp() {

  return (
    <div className="App">
      <CounterContextProvider>
        <HomeMemo />
      </CounterContextProvider>
    </div>
  );
}

const App = React.memo(Appp);
export default App;