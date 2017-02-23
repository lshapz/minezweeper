import React from 'react'
import { connect } from 'react-redux'
import clock from './images/clock.png'

const Counter = (props) => {
  
    if (props.game.playing === false) {
      return (<div className="giant">GAME OVER</div>)
    }
    else if (props.game.mines === 1){
     return( <div className="giant">{props.grid.mines} mine remaining</div>)
    }
    else {
      return (<div className="giant">{props.grid.mines} mines remaining</div>)
    }
    
  
}


function mapStateToProps(state){
  return {grid: state.gridReducer, game: state.gameReducer} 
}

export default connect(mapStateToProps)(Counter)