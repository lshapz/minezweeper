import React from 'react'
import {endGame, mineCount, flagCount} from '../ducks/game.js'
import { connect } from 'react-redux'
import {findFriends} from '../ducks/nearby.js'
import {defineSquare, flagSquare, clickSquare} from '../ducks/board.js'

class Square extends React.Component {

constructor(props){
  
  super(props)
  this.state = this.props.me
  // if (this.props.forData.text === "mine")
  //   { this.props.mineCount() 
  //     // console.log(this.state.id)
  //   }
  // this needs to be moved into Gridmaker or something 

}

handleClick(event){
  event.preventDefault()
  console.log(event.target)
  if (event.type === "contextmenu"){
    this.props.flagSquare(this.props.row, this.props.column)
    this.setState({flagged: true})
    // this.props.flagCount()
    // flagCount has to be a toggle not straight math
}
  else {  
    this.props.clickSquare(this.props.row, this.props.column)
    this.setState({clicked: true})
    if (this.props.me.text === 'mine') {
      this.props.endGame()
    }
}
}

render(){
  let show = "X"
    if (this.props.game.playing === false || this.props.me.clicked === true) {
        show = this.props.me.text
      }
    else if (this.props.me.flagged === true ) {
      show = "flag"
      }



  return (

  <div className="one column bold" onContextMenu={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)}>
    {show}
  </div>

  )}

}

function mapStateToProps(state, props){
  let this_square = state.gridReducer.filter(item=>{
    return item.row === props.row && item.column === props.column
  })
  return {game: state.gameReducer, me: this_square[0]} 
}


export default connect(mapStateToProps, {clickSquare, endGame, defineSquare, flagSquare, findFriends, mineCount, flagCount})(Square)
