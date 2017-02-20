import React from 'react' 
import Gridmaker from './flexfield'
import Square from './Square'
import Line from './Line'
// import {createGrid} from '../ducks/board.js'
import {connect} from 'react-redux' 
 import {flagSquare, clickSquare} from '../ducks/board.js'

class Grid extends React.Component {

constructor(props){
  super(props)
}

handleClick(event){
  event.preventDefault()
  debugger
  console.log(event.target)
  if (event.type === "contextmenu"){
    this.props.flagSquare(this.props.row, this.props.column)
    // this.props.flagCount()
    // flagCount has to be a toggle not straight math
}
  else {  
    // debugger
    this.props.clickSquare(this.props.row, this.props.column)
    // this.setState({clicked: true})
    if (this.props.me.text === 'mine') {
      this.props.endGame()
    }
}
}


render(){
  let flex = this.props.flex

let lines =  flex.map((line, lineIndex)=>{
            return <Line line={line} row={lineIndex + 1} handleClick={this.handleClick} key={lineIndex} />
              })

return ( <div className="container"> {lines} </div> )
}


}


function mapStateToProps(state, props){
  return {flex: state.gridReducer} 
}




export default connect(mapStateToProps, {flagSquare, clickSquare})(Grid)