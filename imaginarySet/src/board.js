import React, { Component } from 'react'
import './App.css';
import Card from './card'

export default class Board extends Component {
  handleClick( card ) {
    console.log( card )
  }

  render() {
    const { cards } = this.props

    return (
      <div className="board">
        {
          cards.map( ( card, index ) =>
            <Card {...card} key={`card-${index}`} onClick={this.handleClick.bind( this )} />
          )
        }
      </div>
    )
  }
}
