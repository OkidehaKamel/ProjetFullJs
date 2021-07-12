import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const[msg,setMsg]=useState('');
  const handleClick= async ()=>{
    const data = await window.fetch('/api/test');
    const json=await data.json();
    setMsg(json.msg);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Test get</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
