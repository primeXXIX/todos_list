import React, { Component } from 'react'
import './App.css';

export default class Card extends Component {
  handleClick( event ) {
    const { image, shape, number, shading, color, onClick } = this.props

    onClick({ image, shape, number, shading, color })
  }

  render() {
    const { image } = this.props

    return (
      <div className="square" onClick={this.handleClick.bind(this)}>
        <img src={process.env.PUBLIC_URL + image} style={{width: 190, height: 240}} alt="smiley face"/>
      </div>
    )
  }
}
