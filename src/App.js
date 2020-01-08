import React from 'react';
import './App.css';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph:{
    max:8,
    min:4
  },
  wordsPerSentence:{
    max:16,
    min:4
  }
})
class App extends React.Component {
  constructor(props){
    super(props);
  this.state={
    number:3,
    type:"sentences"
    }
    this.handleNumber=this.handleNumber.bind(this);
    this.handleRadio=this.handleRadio.bind(this);
    this.handleGenerate=this.handleGenerate.bind(this);
  }
  handleNumber(e){
    this.setState({number:e.currentTarget.value})
  }
  handleRadio(e){
    this.setState({type:e.currentTarget.value})
    document.getElementById(e.currentTarget.id).checked=true;
  }
  handleGenerate(){
    if (this.state.type==="words"){
      document.getElementById("text").innerHTML = lorem.generateWords(parseInt(this.state.number));
    }
    else if(this.state.type==="sentences"){
      document.getElementById("text").innerHTML = lorem.generateSentences(parseInt(this.state.number));
    }
    else if(this.state.type==="paragraphs"){
      document.getElementById("text").innerHTML = lorem.generateParagraphs(parseInt(this.state.number))
    }
  }

  render(){
    console.log(document.getElementsByName("input").value)
  return (
    <div className="App">
      <header className="App-header">
        Lorem Ipsum Generator
      </header>
      <div className="input-container">
        <div id="number-block"><input id="number-field" type="number" value={this.state.number} name="number" onChange={this.handleNumber}></input></div>
        <div id="radio-block">
          <ul>
          <li><label><input type="radio" id="words" value="words" name="input" onClick={this.handleRadio}></input>Words</label></li>
          <li><label><input type="radio" id="sentences" value="sentences" name="input"  onClick={this.handleRadio}></input>Sentences</label></li>
          <li><label><input type="radio" id="paragraphs" value="paragraphs" name="input" onClick={this.handleRadio}></input>Paragraphs</label></li>
          </ul>
          <div className="break"></div>
        </div>
        <button href="#" onClick={this.handleGenerate}>Generate</button>
      </div>
      <div className="text-container" id="text">

      </div>
      <footer>Written by Dwan W.</footer>
    </div>
  );
  }
}

export default App;
