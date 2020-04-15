import React, { Component } from 'react';
import './App.css';
import Quotes from './components/Quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes:[],
      index: null,

    }
    this.selectIndex = this.selectIndex.bind(this);
    this.chooseQuote = this.chooseQuote.bind(this);
    this.nextQuoteClickHandler = this.nextQuoteClickHandler.bind(this);
   
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotesArray => this.setState({
        quotes:quotesArray
      }, () => this.setState({
        index: this.selectIndex()
      })))
  }

  chooseQuote() {
      if(!this.state.quotes.length || !Number.isInteger(this.state.index)){
        return undefined;
      }
      return this.state.quotes[this.state.index];
  }
  nextQuoteClickHandler() {
    this.setState({
      index: this.selectIndex()})
  }

  selectIndex() {
    if(!this.state.quotes.length){
      return undefined;
    }
    return Math.floor(Math.random() * this.state.quotes.length-1);
  }
  
  render(){
    return (
      <div className="App" id= "quote-box">
        <Quotes chooseQuote = {this.chooseQuote()} nextQuoteClickHandler = {this.nextQuoteClickHandler}/>
      </div>
    );
  }
}

export default App;
