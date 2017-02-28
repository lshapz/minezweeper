import React from 'react'
import {endGame, takeTurn} from '../ducks/game.js'
import { connect } from 'react-redux'
import {defineSquare, flagSquare, clickSquare, flagCount} from '../ducks/board.js'
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
  this.clickedSquare = this.clickedSquare.bind(this)
    
}

// componentWillReceiveProps(nextProps){
//   if (nextProps.me.mine === true)
//   {
//     this.props.mineCount(1)
//   }
  
// }


clickedSquare(){
  console.log(this)
  let row = this.props.row
  let column = this.props.column
  let number = this.props.me.text
  let count = 0
  let newClickers = []
  let neighbors = [
                [row-1, column-1], [row-1, column], [row-1, column+1], 
                [row, column-1], [row, column+1],
                [row+1, column-1], [row+1, column], [row+1, column+1]
                ]
  neighbors.forEach(subArray=>{
    if (this.props.flex[subArray[0]] && this.props.flex[subArray[0]][subArray[1]] && this.props.flex[subArray[0]][subArray[1]].clicked === false && this.props.flex[subArray[0]][subArray[1]].flag !== true){
      newClickers.push(subArray)
    }
    else if (this.props.flex[subArray[0]] && this.props.flex[subArray[0]][subArray[1]] && this.props.flex[subArray[0]][subArray[1]].clicked === false && this.props.flex[subArray[0]][subArray[1]].flag === true){
      count +=1 
    }
  })
  // debugger 
  if (count === number){
    return newClickers
  }
  else {
    return null 
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
  // debugger

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
  let imageSource = { 0: image0, 1: image1, 2: image2, 3: image3, 4: image4, 5: image5, 6: image6, 7: image7, 8: image8, 'X': imageX, 'flag': imageflag, 'mine': imagemine }
  let image = imageSource[show]

  return (
  <td onContextMenu={this.props.handleClick.bind(this)} onClick={this.props.handleClick.bind(this)}>
    <img className="box" src={image} alt={this.props.row + " " + this.props.column} />  
  </td>

  )}

}

function mapStateToProps(state, props){
  let square = state.gridReducer.grid[props.row][props.column]
  return {game: state.gameReducer, me: square, flex: state.gridReducer.grid} 
}


export default connect(mapStateToProps, {takeTurn, clickSquare, endGame, defineSquare, flagSquare, flagCount})(Square)
