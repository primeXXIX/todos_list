import React, { Component } from 'react'
import './App.css';
import Card from './card'
import _ from 'lodash'
import set from './comparison'
import cards from './Deck'


//cards that are in play, full deck of cards, and selected card, minus cards used

export default class Board extends Component {
  constructor(props) {
    super(props)
    let shuffledCards = _.shuffle(cards)
    this.state = {
      selectedCards: [],
      cardsInPlay: shuffledCards.slice(0, 12),
      deck: shuffledCards.slice(12)
    }
  }

  handleClick( card ) {
    this.state.selectedCards.push(card)
    console.log( this.state.selectedCards )
    if (this.state.selectedCards.length === 3) {
      set(this.state.selectedCards)
    }
  }

  render() {
    const  cards  = this.state.cardsInPlay

    return (
      <div className="board">
        {
          _.shuffle(cards.map( ( card, index ) =>
            <Card {...card} key={`card-${index}`} onClick={this.handleClick.bind( this )} />
          ))
        }
      </div>
    )
  }
}
