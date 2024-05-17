
import './App.css';
const randomNum = require('random-num')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Reacts</h1>
        <h2>{randomNum(1,100)}</h2>
      </header>
    </div>
  );
}

export default App;
