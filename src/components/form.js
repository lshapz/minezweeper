import React from 'react'
import {connect} from 'react-redux'
import {makeHard, resetMines} from '../ducks/board.js'

class Form extends React.Component {

constructor(props){
  super(props)
  this.handleOnChange = this.handleOnChange.bind(this)
}


handleOnChange(event){
  this.props.resetMines()
  this.props.makeHard(event.target.value)


}
componentWillMount(){
  this.props.makeHard('easy')
}



render(){
return (

<form onChange={this.handleOnChange}>
  <label htmlFor="easy">Easy </label><input type="radio" name="difficulty" value="easy" defaultChecked /> ||    
  <label htmlFor="medium"> Medium </label><input type="radio" name="difficulty" value="medium" /> || 
  <label htmlFor="hard"> Hard </label><input type="radio" name="difficulty" value="hard" />
</form>
)
}
}


function mapStateToProps(state, props){
  return {game: state.gameReducer, flex: state.gridReducer} 
}

// export default Form
export default connect(mapStateToProps, {resetMines, makeHard})(Form)