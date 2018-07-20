import React, { Component } from 'react';
import logo from './Programming-languages.jpg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
console.log(BrowserRouter)



class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <button type="button" onclick="homeFunction()">HOME</button>

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Practice problems</h1>
            <script>function skipFunction(){
              // alert("This will skip to the next question")
            }
            function hintFunction(){
              // document.getElementById("hint").innerHTML = "use the split method"
            }
            </script>
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
        <button type="button" onclick="someFunction()">SKIP</button>
        <button type="button" onclick="hint ">HINT</button>
        <div id="hint"></div>
      </div>
    );
  }
}

export default App;
