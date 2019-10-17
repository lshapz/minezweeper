import React from 'react'
import {connect} from 'react-redux'
import {makeHard, resetMines} from '../ducks/board.js'
import {resetGame} from '../ducks/game.js'

class Form extends React.Component {

constructor(props){
  super(props)
  this.handleOnChange = this.handleOnChange.bind(this)
}

handleOnChange(event){
  this.props.resetMines()
  this.props.resetGame()
  this.props.makeHard(event.target.value)
}

componentWillMount(){
  this.props.makeHard('easy')
}

render(){
return (


<form className="form-toolbar" onChange={this.handleOnChange}>

  <span className="diff"><input type="radio" name="difficulty" value="easy" defaultChecked /><label htmlFor="easy">Easy </label>&nbsp; &nbsp;&nbsp;  </span>
  <span className="diff"><input type="radio" name="difficulty" value="medium" />  <label htmlFor="medium"> Medium </label></span>
  <span className="diff"><input type="radio" name="difficulty" value="hard" /><label htmlFor="hard"> Hard </label></span>

</form>
)
}
}


function mapStateToProps(state, props){
  return {game: state.gameReducer} 
}

// export default Form
export default connect(mapStateToProps, {makeHard, resetGame, resetMines})(Form)