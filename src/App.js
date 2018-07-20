import React, { Component } from 'react';
import logo from './Programming-languages.jpg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
console.log(BrowserRouter)

// function executeSkipFunction(){
//   alert("This will skip to the next question")
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onclick="homeFunction()">HOME</button>

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Practice problems</h1>

        </header>
        <body>
          <h1 id="Question">Q1</h1>
        </body>
        <h4>
          What method would you use to transform a string:
        </h4>
      

        <form>
          <p>str = "Hello, please transform this string into an array separated by by spaces"</p>
          <h2>newStr = str.<span><input id="answer" type="text" placeholder="Your answer here"></input></span>(" ");</h2>
          <input type="submit"></input>
        </form>
        <button type="button" onclick="executeSkipFunction()">SKIP</button>
        <button type="button" onclick="executeHintFunction()">HINT</button>

      </div>
    );
  }
}

export default App;
