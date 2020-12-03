// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import CounterContext from './components/CounterContext';
import Parent from './components/Parent'

function App() {

  let countState = useState(0)
  return (
    <CounterContext.Provider value={countState}>
    <div>
    
      <Parent/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
