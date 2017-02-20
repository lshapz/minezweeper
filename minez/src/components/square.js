import React from 'react'
import {endGame, mineCount, flagCount} from '../ducks/game.js'
import { connect } from 'react-redux'
import {findFriends} from '../ducks/nearby.js'
import {defineSquare, flagSquare, clickSquare} from '../ducks/board.js'
import image0 from './images/0.png'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
import image7 from './images/7.png'
import image8 from './images/8.png'
import imageX from './images/X.png'
import imageflag from './images/flag.png'
import imagemine from './images/mine.png'


class Square extends React.Component {

constructor(props){
  // debugger
  super(props)

  // debugger
  // this.state = this.props.me
  // if (this.props.forData.text === "mine")
  //   { this.props.mineCount() 
  //     // console.log(this.state.id)
  //   }
  // this needs to be moved into Gridmaker or something 

}

render(){
    let show = "X"
    if (this.props.game.playing === false || this.props.me.clicked === true) {
        show = this.props.me.text
      }
    else if (this.props.me.flagged === true ) {
      show = "flag"
      }
    let image
    switch (show){
      case 0:
        image = image0;
      case 1:
        image = image1;
      case 2:
        image = image2;
      case 3:
        image = image3;
      case 4:
        image = image4;
      case 5:
        image = image5;
      case 6:
        image = image6;
      case 7:
        image = image7;
      case 8:
        image = image8;
      case 'X':
        image = imageX;
      case 'flag':
        image = imageflag;
      case 'mine':
        image = imagemine;
      default:
        image = imageX;
      }
// console.log(show)

  return (
  <div className="one column bold" onContextMenu={this.props.handleClick.bind(this)} onClick={this.props.handleClick.bind(this)}>
     <img src={image} />
  </div>

  )}

}

function mapStateToProps(state, props){
  let foo = state.gridReducer[props.row-1][props.column-1]
  // let this_square = state.gridReducer.filter(item=>{
  //   return item.row === props.row && item.column === props.column
  // })
  return {game: state.gameReducer, me: foo} 
}


export default connect(mapStateToProps, {clickSquare, endGame, defineSquare, flagSquare, findFriends, mineCount, flagCount})(Square)
