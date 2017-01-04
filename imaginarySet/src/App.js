import React, { Component } from 'react';
import './App.css';
import Deck from '../src/Deck'
import _ from 'lodash'

const deck = ("Deck", Deck)
let currentDeck = _.shuffle(deck)
let board = [null,null,null,null,null,null,null,null,null,null,null,null]
// The selected cards
let setArray = []
// the values of those cards (color, shape, shading, number)
let comparisonArray = [false, false, false, false]
let score = 0

  // Multiple nested arrays method
// let board = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
//   [null, null, null]
// ]


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      board: [null,null,null,null,null,null,null,null,null,null,null,null]
    }
  }

//updates current deck once cards are drawn
  update(card) {
    const cards = this.state.cards
    cards.push(card)
    this.setState(Object.assign(this.state, {cards: cards}))
  }



  render() {
    // replaces cards in array only for null values (for loop)
    function deal() {
        for ( var i = currentDeck.length; i >= 0; i--) {
            if (board[i] === null) {
              // deal new card
              let card = currentDeck.pop()
              board[i] = card

              // and update deck
              currentDeck = currentDeck.filter(function(val) {
                return val.image !== card.image
              })
              this.update(card)
            }
        }
        console.log(board)
    }


    // start new game
    function reset() {
    // clears board, starts with original deck, shuffles, assigned to new game button
          board = [null,null,null,null,null,null,null,null,null,null,null,null]
          currentDeck = _.shuffle(deck)
          this.update(board)
      }


    let dealButton = <button className="dealButton" onClick={deal.bind(this)}> Lets make a deal </button>
    let resetButton = <button className="resetButton" onClick={reset.bind(this)}> Clear Board</button>

    // Multiple nested arrays method
    //   deal() {
    //     for(i=0; i<currentDeck.length; i++) {
    //       for(j=0; j<i.length; j++) {
    //         if (i[j] = null) {
    //           // deal new card
    //         }
    //       }
    //     }
    //   }

    let card0 = board[0] ? <img src={process.env.PUBLIC_URL + board[0].image} onClick={pushCard.bind(this)} /> : null
    let card1 = board[1] ? <img src={process.env.PUBLIC_URL + board[1].image} onClick={pushCard.bind(this)} /> : null
    let card2 = board[2] ? <img src={process.env.PUBLIC_URL + board[2].image} onClick={pushCard.bind(this)} /> : null
    let card3 = board[3] ? <img src={process.env.PUBLIC_URL + board[3].image} onClick={pushCard.bind(this)} /> : null
    let card4 = board[4] ? <img src={process.env.PUBLIC_URL + board[4].image} onClick={pushCard.bind(this)} /> : null
    let card5 = board[5] ? <img src={process.env.PUBLIC_URL + board[5].image} onClick={pushCard.bind(this)} /> : null
    let card6 = board[6] ? <img src={process.env.PUBLIC_URL + board[6].image} onClick={pushCard.bind(this)} /> : null
    let card7 = board[7] ? <img src={process.env.PUBLIC_URL + board[7].image} onClick={pushCard.bind(this)} /> : null
    let card8 = board[8] ? <img src={process.env.PUBLIC_URL + board[8].image} onClick={pushCard.bind(this)} /> : null
    let card9 = board[9] ? <img src={process.env.PUBLIC_URL + board[9].image} onClick={pushCard.bind(this)} /> : null
    let card10 = board[10] ? <img src={process.env.PUBLIC_URL + board[10].image} onClick={pushCard.bind(this)} /> : null
    let card11 = board[11] ? <img src={process.env.PUBLIC_URL + board[11].image} onClick={pushCard.bind(this)} /> : null



    // select set, turn index in array to null again
    // RESEARCH: TouchableNativeFeedback Component pushes to setArray
    // Create a 2 part IF statement (see rules for statements: if only one value matches between objects, or if all but one) that compares all object values for all three elements in setArray, if statement is true than remove cards and deal
    // Else not a set, do nothing



    function compareColor(setArray) {
    	if (setArray[1].color === setArray[2].color && setArray[2].color === setArray[3].color) {
        comparisonArray[0] = true
      }
      if (setArray[1].color !== setArray[2].color && setArray[2].color !== setArray[3].color && setArray[1].color !== setArray[3].color) {
        comparisonArray[0] = true
      }
      else {
          comparisonArray[0] = false
      }
    }
    function compareShape(setArray) {
    	if (setArray[1].shape === setArray[2].shape && setArray[2].shape === setArray[3].shape) {
        comparisonArray[1] = true
      }
      if (setArray[1].shape !== setArray[2].shape && setArray[2].shape !== setArray[3].shape && setArray[1].shape !== setArray[3].shape) {
        comparisonArray[1] = true
      }
      else {
          comparisonArray[1] = false
      }
    }
    function compareShading(setArray) {
    	if (setArray[1].shading === setArray[2].shading && setArray[2].shading === setArray[3].shading) {
        comparisonArray[2] = true
      }
      if (setArray[1].shading !== setArray[2].shading && setArray[2].shading !== setArray[3].shading && setArray[1].shading !== setArray[3].shading) {
        comparisonArray[2] = true
      }
      else {
          comparisonArray[2] = false
      }
    }
    function compareNumber(setArray) {
    	if (setArray[1].number === setArray[2].number && setArray[2].number === setArray[3].number) {
        comparisonArray[3] = true
      }
      if (setArray[1].number !== setArray[2].number && setArray[2].number !== setArray[3].number && setArray[1].number !== setArray[3].number) {
        comparisonArray[3] = true
      }
      else {
          comparisonArray[3] = false
      }
    }

    // pushes the card to the set array
    function pushCard() {
      //push into setArray
      setArray.push()
    }




    function set() {
      // if not a Set display "Nope nope nope"
      if (comparisonArray.includes(false)) {
        setArray = []
        alert("Nope nope nope")
      }
      // else, remove cards from board and deal new cards and give point
      else {
        board.filter(setArray)
        deal()
        score + 1
      }
    }


    return (
      <div className="board">
        {this.state.board.map((cell) => {
          return <div className="square">{cell}</div>;
        })}
      </div>
    );
  }
}

  export default App;

  // {dealButton}
  // {resetButton}
  // {card0}
  // {card1}
  // {card2}
  // {card3}
  // {card4}
  // {card5}
  // {card6}
  // {card7}
  // {card8}
  // {card9}
  // {card10}
  // {card11}
