import React, { Component } from 'react';
import './App.css';
import Board from './board'

import cards from './Deck'

export default class App extends Component {
  render () {
    return <Board cards={cards}/>
  }
}
