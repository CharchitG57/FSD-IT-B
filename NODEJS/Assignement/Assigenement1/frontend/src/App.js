import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [fileData, setFileData] = useState("");

  const writeFile = async () => {
    await axios.post('http://localhost:5000/write', { text });
    alert("File Written");
  };

  const readFile = async () => {
    const res = await axios.get('http://localhost:5000/read');
    setFileData(res.data);
  };

  return (
    <div>

      {/* HEADER */}
      <header className="header">
        <img 
          src="https://avatars.githubusercontent.com/u/48626910?s=280&v=4"
          alt="logo"
          className="logo"
        />
        <h2>Home</h2>
      </header>

      {/* MAIN */}
      <div className="container">

        <h1>FS Model for Node</h1>

        <input
          type="text"
          placeholder="Enter data"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />

        <div className="buttons">
          <button onClick={writeFile}>FS create/write</button>
          <button onClick={readFile}>FS read</button>
        </div>

        <p>{fileData}</p>

      </div>

    </div>
  );
}

export default App;
