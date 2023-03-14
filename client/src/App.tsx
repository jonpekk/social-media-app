import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [message, setMessage] = useState<string>("")

  async function testFetch() {
    const response = await fetch("/api/v1/test")
    const json = await response.json()
    setMessage(json.message)
  }

  useEffect(() => {
    testFetch()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The secret message is {message === "" ? "..." : message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
