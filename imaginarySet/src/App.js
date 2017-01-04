import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from '../src/Deck'
import _ from 'lodash'

const deck = ("Deck", Deck)
let deckCurrent = _.shuffle(deck)
let board = [null,null,null,null,null,null,null,null,null,null,null,null]


  // Multiple nested arrays method
// let board = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
//   [null, null, null]
// ]


class App extends Component {
  constructor() {
    super()
    this.state = { cards: [] }
  }

//updates current deck once cards are drawn
  update(card) {
    const cards = this.state.cards
    cards.push(card)
    this.setState(Object.assign(this.state, {cards: cards}))
  }

// start new game
  reset() {
// clears board, starts with original deck, shuffles, assigned to new game button
  }




  render() {


    // replaces cards in array only for null values (for loop)
    deal() {
        for(i=0; i<deckCurrent.length; i++) {
            if (i = null) {
              // deal new card
              let card = currentDeck.pop
              board[i] = card
              // and update deck
              currentDeck = currentDeck.filter(function(val) {
                return val.image !== card.image
              })
              this.update(card)
            }
        }
    }

    let dealButton = <button className= "dealButton" onClick={deal.bind(this)}> Lets make a deal </button>

    // Multiple nested arrays method
    //   deal() {
    //     for(i=0; i<deckCurrent.length; i++) {
    //       for(j=0; j<i.length; j++) {
    //         if (i[j] = null) {
    //           // deal new card
    //         }
    //       }
    //     }
    //   }

    let card0 = board[0] ? <img src={process.env.PUBLIC_URL + board[0].image} style={/* Fill in style */} /> : null
    let card1 = board[1] ? <img src={process.env.PUBLIC_URL + board[1].image} style={/* Fill in style */} /> : null
    let card2 = board[2] ? <img src={process.env.PUBLIC_URL + board[2].image} style={/* Fill in style */} /> : null
    let card3 = board[3] ? <img src={process.env.PUBLIC_URL + board[3].image} style={/* Fill in style */} /> : null
    let card4 = board[4] ? <img src={process.env.PUBLIC_URL + board[4].image} style={/* Fill in style */} /> : null
    let card5 = board[5] ? <img src={process.env.PUBLIC_URL + board[5].image} style={/* Fill in style */} /> : null
    let card6 = board[6] ? <img src={process.env.PUBLIC_URL + board[6].image} style={/* Fill in style */} /> : null
    let card7 = board[7] ? <img src={process.env.PUBLIC_URL + board[7].image} style={/* Fill in style */} /> : null
    let card8 = board[8] ? <img src={process.env.PUBLIC_URL + board[8].image} style={/* Fill in style */} /> : null
    let card9 = board[9] ? <img src={process.env.PUBLIC_URL + board[9].image} style={/* Fill in style */} /> : null
    let card10 = board[10] ? <img src={process.env.PUBLIC_URL + board[10].image} style={/* Fill in style */} /> : null
    let card11 = board[11] ? <img src={process.env.PUBLIC_URL + board[11].image} style={/* Fill in style */} /> : null

    // select set, turn index in array to null again
      set() {
        //selected cards will be compared to list of possible sets
        // if set, remove cards from game and deal new cards and give point
        // else display "Nope nope nope"
      }


    return (
      <div className = "table">
        {dealButton}
        {card0}
        {card1}
        {card2}
        {card3}
        {card4}
        {card5}
        {card6}
        {card7}
        {card8}
        {card9}
        {card10}
        {card11}
      </div>
    );
  }
}

export default App;
