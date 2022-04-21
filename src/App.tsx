import React from 'react';
import './App.css';
import HomeMemo from './components/Home';

function Appp() {

  return (
    <div className="App">
      <HomeMemo />
    </div>
  );
}

const App = React.memo(Appp);
export default App;