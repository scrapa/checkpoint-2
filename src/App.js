import React from 'react';
import logo from './logo.svg';
import './App.css';
import logo1 from "./22456.jpg";
import logo2 from "./23829.jpg";
import "./style.css"


function App() {
  return (
    <div style={{border:'solid 1px black' ,maxWidth:'100vw'}}>

	<h1 className="title red">My title</h1>

	<br/>

<img src={logo2}/>

<br/>

	<img src={logo1} />
  </div>
  );
}

export default App;
