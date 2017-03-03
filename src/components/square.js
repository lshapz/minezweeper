import React from 'react'
import {lostGame, resetGame, takeTurn, winGame} from '../ducks/game.js'
import { connect } from 'react-redux'
import {clickSquare, defineSquare, flagCount, flagSquare} from '../ducks/board.js'
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
  this.handleClick = this.handleClick.bind(this)
}

handleClick(event){
  if (this.props.game.playing === false) {
    this.props.takeTurn()
  }

  event.preventDefault()
  if (event.type === "contextmenu"){
    if (this.props.me.clicked === true)
      {return}
    else {
      this.props.flagSquare(this.props.row, this.props.column)
      this.props.flagCount(this.props.me.flag)
    if (this.props.grid.mines === 1){
      this.props.winGame()
    }

  }
  }
  else {  
    if (this.props.me.flag === true) {
      return
    }
    else if (this.props.me.mine === true) {
      this.props.lostGame()
    }
    else if (this.props.me.clicked === false) {
      this.props.clickSquare(this.props.row, this.props.column)
    }
    else if (this.props.me.clicked === true){
      let howdyNeighbor = this.clickedSquare()
      if (howdyNeighbor) { 
        howdyNeighbor.forEach(item=>{
          let [row, column] = item 
          this.props.clickSquare(row, column)
          if (this.props.grid.grid[row][column].text === 'mine'){
            this.props.lostGame()
          }
        }) 
     }
    }

  }
}

clickedSquare(){
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
    let [friendRow, friendColumn] = subArray
    if (this.props.grid.grid[friendRow] && this.props.grid.grid[friendRow][friendColumn] && this.props.grid.grid[friendRow][friendColumn].clicked === false && this.props.grid.grid[friendRow][friendColumn].flag !== true){
      newClickers.push(subArray)
    }
    else if (this.props.grid.grid[friendRow] && this.props.grid.grid[friendRow][friendColumn] && this.props.grid.grid[friendRow][friendColumn].clicked === false && this.props.grid.grid[friendRow][friendColumn].flag === true){
      count += 1 
    }
  })
  if (count >= number){
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
      neighbors.forEach(subArray=>{
        let [friendRow, friendColumn] = subArray
      if (this.props.grid.grid[friendRow] && this.props.grid.grid[friendRow][friendColumn] && this.props.grid.grid[friendRow][friendColumn].text !== 'mine' && this.props.grid.grid[friendRow][friendColumn].clicked === false)
        {
          this.props.clickSquare(friendRow, friendColumn)
        }
      })
    }

}


render(){
  let show = "X"
    if (this.props.me.clicked === true || this.props.game.lost === true) {
        show = this.props.me.text
      }
    else if (this.props.me.flag === true ) {
      show = "flag"
    }  
  let imageSource = { 0: image0, 1: image1, 2: image2, 3: image3, 4: image4, 5: image5, 6: image6, 7: image7, 8: image8, 'X': imageX, 'flag': imageflag, 'mine': imagemine }
  let image = imageSource[show]

  return (
  <td onContextMenu={this.handleClick} onClick={this.handleClick}>
    <img className="box" src={image} alt={this.props.row + " " + this.props.column} />  
  </td>

  )}

}

function mapStateToProps(state, props){
  let square = state.gridReducer.grid[props.row][props.column]
  return {game: state.gameReducer, me: square, grid: state.gridReducer} 
}


export default connect(mapStateToProps, {clickSquare, defineSquare, flagCount, flagSquare, lostGame, resetGame, takeTurn, winGame})(Square)
