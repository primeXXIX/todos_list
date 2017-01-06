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
      cardsInPlay: [null, null, null, null, null, null, null, null, null, null, null, null], // shuffledCards.slice(0, 6),
      deck: shuffledCards // .slice(6)
    }
  }

  deal() {
    for ( var i = 0; i < this.state.cardsInPlay.length; i++) {
        if (this.state.cardsInPlay[i] === null) {
          // deal new card
          let dealtCard = this.state.deck.pop()
          this.state.cardsInPlay[i] = dealtCard
              // and update deck
             //  this.state.deck = this.state.deck.filter(function(val) {
             //    return val.image !== dealtCard.image
             //  })
          this.update(this.state.deck)
        }
    }
  }

  boardHandleClick( card ) {

//if collection  .includes card, _.pull card from collection
// otherwise run function as normal

    // if ( this.state.selectedCards.includes(card) ) {
    //   this.state.selectedCards.push(card)
    //   _.pull(this.state.selectedCards, card)
    // }

      // _.pull(this.state.selectedCards, card)
      this.state.selectedCards.push(card)
      // _.pull(this.state.selectedCards, card)
      console.log( this.state.selectedCards )
      if (this.state.selectedCards.length === 3) {
        // if set is true, change selcted cards to null in cardsInPlay and run deal
        if ( set(this.state.selectedCards) ) {

          let newCardsInPlay = this.state.cardsInPlay

          for (var i = 0; i < newCardsInPlay.length; i++) {
            for (var j = 0; j < 3; j++) {
              if ( _.isEqual( newCardsInPlay[i], this.state.selectedCards[j] ) ) {
                  newCardsInPlay[i] = null;
              }
            }
          }
          this.setState(Object.assign(this.state, {cardsInPlay: newCardsInPlay}))
        }
        this.state.selectedCards = []
        const selectedCardDivs = Array.from(document.getElementsByClassName('selected'))
        selectedCardDivs.forEach(div => div.classList.remove('selected'))
        this.deal()
      }
    }

  //updates current deck once cards are drawn
  update(deck) {
      this.setState(Object.assign(this.state, {deck: deck}))
    }


   // clears board, starts with original deck, shuffles, assigned to new game button
   reset() {
      this.state.cardsInPlay = [null, null, null, null, null, null, null, null, null, null, null, null]
      this.state.deck = _.shuffle(cards)
      this.state.selectedCards = []
      this.update(this.state.deck)
      this.deal()
   }


  render() {
    const  cards  = this.state.cardsInPlay

    // let dealButton = <button className="dealButton" onClick={this.deal.bind(this)}> Lets make a deal </button>

    let resetButton = <button className="resetButton" onClick={this.reset.bind(this)}> New Game</button>

    // can click function
    // const allowedToClick = this.state.cardsInPlay

    return (
      <div className="board">
        {
          cards.map( ( card, index ) =>
            <Card {...card} key={`card-${index}`} boardHandleClick={this.boardHandleClick.bind( this )} />
          )
        }
        {resetButton}
        {/* {dealButton} */}

      </div>
    )
  }
}
