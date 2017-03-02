import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
  
    if (props.game.lost === true) {
      return (<div className="giant">YOU LOSE!</div>)
    }
    else if (props.grid.mines === 1){
     return( <div className="giant">{props.grid.mines} mine remaining</div>)
    }
    else if (props.grid.mines === 0){
      return(<div className="giant">YOU WIN!</div>)
    }
    else {
      return (<div className="giant">{props.grid.mines} mines remaining</div>)
    }
    
  
}


function mapStateToProps(state){
  return {grid: state.gridReducer, game: state.gameReducer} 
}

export default connect(mapStateToProps)(Counter)