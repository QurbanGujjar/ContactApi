// import logo from './logo.svg';
import './App.css';
import CounterContext from './components/CounterContext';
import Parent from './components/Parent'

function App() {
  return (
    <CounterContext.Provider value={10}>
    <div>
    
      <Parent/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
