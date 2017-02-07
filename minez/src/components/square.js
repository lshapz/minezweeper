import React from 'react'
import {endGame} from '../ducks/game.js'
import { connect } from 'react-redux'
import {findFriends} from '../ducks/nearby.js'


class Square extends React.Component {

constructor(props){
  super(props)
  this.state = {id: [this.props.lineId, this.props.cellId], 
    data: this.props.forData, clicked: false, flagged: false}
}

handleClick(event){
  event.preventDefault()
  console.log(event.target)
  if (event.type === "contextmenu")
    {this.setState({flagged: true})}
  else {  
    this.setState({clicked: true})
    if (this.props.forData === "mine") {
      this.props.endGame()
    }
    // else if (this.props.forData == 0)
    // {
    //   debugger
    //   this.props.findFriends(this.state.id)
    // }
  }  

}



render(){
  let show = "X"
    if (this.props.game === false || this.state.clicked === true) {
        show= this.props.forData
      }
    else if (this.state.flagged === true ) {
      show = "flag"
      }



  return (

  <div className="one column bold" onContextMenu={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)}>
    {show}
  </div>

  )}

}
function mapStateToProps(state){
  return {game: state.gameReducer} 
}


export default connect(mapStateToProps, {endGame, findFriends})(Square)
