import React from 'react'
import {endGame, mineCount, flagCount, takeTurn} from '../ducks/game.js'
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
  
  super(props)
  if (this.props.me.text === "mine"){
    this.props.mineCount()
  }

}

componentWillUpdate(){
    if (this.props.me.text === 0 && this.props.me.clicked === true) 
    {         let row = this.props.me.row
              let column = this.props.me.column
              let neighbors = [
                [row-1, column-1], [row-1, column], [row-1, column+1], 
                [row, column-1], [row, column+1],
                [row+1, column-1], [row+1, column], [row+1, column+1]
              ]
      neighbors.forEach(arr=>{
      if (this.props.flex[arr[0]] && this.props.flex[arr[0]][arr[1]] && this.props.flex[arr[0]][arr[1]].text !== 'mine' && this.props.flex[arr[0]][arr[1]].clicked === false)
        {
          this.props.clickSquare(arr[0], arr[1])
        }
      })

    }


}


render(){
  let show = "X"
    if (this.props.me.clicked === true) {
        show = this.props.me.text
      }
    else if (this.props.game.playing === false){
        show = this.props.me.text
    }
    else if (this.props.me.flag === true ) {
      show = "flag"
    }  
  let image
  // https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d#.ugl20fsep
  switch (show){
      case 0:
        image = image0;
        break;
      case 1:
        image = image1;
        break;
      case 2:
        image = image2;
        break;
      case 3:
        image = image3;
        break;
      case 4:
        image = image4;
        break;
      case 5:
        image = image5;
        break;
      case 6:
        image = image6;
        break;
      case 7:
        image = image7;
        break;
      case 8:
        image = image8;
        break;
      case 'X':
        image = imageX;
        break;
      case 'flag':
        image = imageflag;
        break;
      case 'mine':
        image = imagemine;
        break;
      default:
        image = imageX
      }

  return (
  <td onContextMenu={this.props.handleClick.bind(this)} onClick={this.props.handleClick.bind(this)}>
    
    <img className="box" src={image} />
    
  </td>

  )}

}

function mapStateToProps(state, props){
  let foo = state.gridReducer[props.row][props.column]
  return {game: state.gameReducer, me: foo, flex: state.gridReducer} 
}


export default connect(mapStateToProps, {takeTurn, clickSquare, endGame, defineSquare, flagSquare, findFriends, mineCount, flagCount})(Square)
