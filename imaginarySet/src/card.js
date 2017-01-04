import React, { Component } from 'react'
import './App.css';

export default class Card extends Component {
  handleClick( event ) {
    const { image, shape, number, shading, color, onClick } = this.props

    onClick({ image, shape, number, shading, color })
  }

  render() {
    const { image, shape, number, shading, color } = this.props

    return (
      <div className="square" onClick={this.handleClick.bind(this)}>
        {image} {shape} {number} {shading} {color}
      </div>
    )
  }
}
