import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <h1>🚀 Vite + React</h1>
        <p className="subtitle">
          Build fast. Deploy faster. Beautiful UI.
        </p>

        <div className="counter-box">
          <p className="count">{count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>

        <p className="footer-text">
          Edit <code>src/App.jsx</code> and save to see magic ✨
        </p>
      </div>
    </div>
  );
}

export default App;

