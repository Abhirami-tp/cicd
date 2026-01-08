import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <h1>🚀 Vite + React</h1>
        <p className="subtitle">
          A beautiful frontend powered by React & Vite
        </p>

        <button className="counter-btn" onClick={() => setCount(count + 1)}>
          Click Count: {count}
        </button>

        <p className="hint">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <div className="links">
          <a href="https://vite.dev" target="_blank">Vite Docs</a>
          <a href="https://react.dev" target="_blank">React Docs</a>
        </div>
      </div>
    </div>
  );
}

export default App;
