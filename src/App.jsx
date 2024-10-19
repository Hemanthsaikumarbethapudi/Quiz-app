// import logo from './logo.svg';
// import './App.css';
import "./style.css";
function App() {
  const moneyPyramid = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 300 },
    { id: 4, amount: 400 },
    { id: 5, amount: 500 },
    { id: 6, amount: 600 },
    { id: 7, amount: 700 },
    { id: 8, amount: 800 },
    { id: 9, amount: 900 },
    { id: 10, amount: 1000 },
    { id: 11, amount: 1200 },
    { id: 12, amount: 1300 }
  ].reverse();
  return (
    <div className="App">
      <div className="main">
        <h1>main</h1>
      </div>
      <div className="pyramid">
        <ul className="moneylist">
          {moneyPyramid.map((m) => (
            <li className="moneyListnum">
              <span className="moneylistnums">{m.id}</span>
              <span className="moneylistamo">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default App;
