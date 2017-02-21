import React from 'react' 
import Gridmaker from './flexfield'
import Square from './square'
import Line from './line'
// import {createGrid} from '../ducks/board.js'
import {connect} from 'react-redux' 
 import {flagSquare, clickSquare} from '../ducks/board.js'
import {flagCount} from '../ducks/game.js'
class Grid extends React.Component {

constructor(props){
  super(props)
}

handleClick(event){
  event.preventDefault()
  console.log(event.target)
  console.log(this)
  if (event.type === "contextmenu"){
    this.props.flagSquare(this.props.row, this.props.column)
    this.props.flagCount(this.props)
    // flagCount has to be a toggle not straight math
}
  else {  
    this.props.clickSquare(this.props.row, this.props.column)
    if (this.props.me.text === 'mine') {
      this.props.endGame()
    }

    }
this.props.takeTurn()

}



render(){
  let flex = this.props.flex

let lines =  flex.map((line, lineIndex)=>{
            return <Line line={line} row={lineIndex} key={lineIndex} handleClick={this.handleClick} />
              })

return ( <table className="container"> {lines} </table> )
}


}


function mapStateToProps(state, props){
  return {flex: state.gridReducer} 
}




export default connect(mapStateToProps)(Grid)