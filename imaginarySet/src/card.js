import React, { Component } from 'react'
import './App.css';


export default class Card extends Component {
  cardHandleClick( event ) {
    const { image, shape, number, shading, color, boardHandleClick } = this.props
    if (event.target.tagName === 'DIV') {
      event.target.classList.toggle('selected')
    } else if (event.target.tagName === 'IMG') {
      event.target.parentNode.classList.toggle('selected')
    }
    boardHandleClick({ image, shape, number, shading, color })
  }

  render() {
    const { image } = this.props

    let cardBack = <img src={process.env.PUBLIC_URL + "/cards/poke.jpg"} style={{width: 190, height: 235}} alt="broken" />

    let cardImage = image ? <img src={process.env.PUBLIC_URL + image} style={{width: 190, height: 235}} alt="broken" /> : cardBack


    return (

      <div className={ image ? "square" : "cardback"} onClick={this.cardHandleClick.bind(this)}>
          {cardImage}
      </div>

      // <div class="flip">
      //     <div class="card">
      //         <div class="face front">
      //             Front
      //         </div>
      //         <div class="face back">
      //             Back
      //         </div>
      //     </div>
      // </div>
    )
  }
}

    // $('.flip').click(function(){
    // 		$(this).find('.card').addClass('flipped').mouseleave(function(){
    //         $(this).removeClass('flipped');
    //     });
    //     return false;
    // });

// we need our div to switch between classes depending on if the image exists.
