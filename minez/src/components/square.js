import React from 'react'
import {endGame, mineCount, flagCount} from '../ducks/game.js'
import { connect } from 'react-redux'
import {findFriends} from '../ducks/nearby.js'


class Square extends React.Component {

constructor(props){
  super(props)

  this.state = {id: [this.props.forData.row, this.props.forData.column], 
    text: this.props.forData.text, clicked: this.props.forData.clicked, flagged: this.props.forData.flag}
  if (this.props.forData.text === "mine")
    { this.props.mineCount() 
      console.log(this.state.id)
    }
}

handleClick(event){
  event.preventDefault()
  console.log(event.target)
  if (event.type === "contextmenu"){
    // send this information up to Grid? 
    this.setState({flagged: true})
    this.props.flagCount()
}
// need to handle changing from flagged to clicked if you change your mind HTK
  else {  
    this.setState({clicked: true})
    if (this.state.text === 'mine') {
      this.props.endGame()
    }
    if (this.state.text === '0')
    {
      // this.props.findFriends(this.state.id)
      // I think you're going to have to make it all a part of the state 
    }

    // you probably want to push this back to Grid?
    //
  }  

}



render(){
  let show = "X"
    if (this.props.game.playing === false || this.state.clicked === true) {
        show= this.props.forData.text
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


export default connect(mapStateToProps, {endGame, findFriends, mineCount, flagCount})(Square)
