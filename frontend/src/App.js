import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8085/')
       .then((response) => response.text())
       .then((data) => {
          console.log("data: ", data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {posts}
        </a>
      </header>
    </div>
  );
}

export default App;
