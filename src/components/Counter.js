import React from 'react'
import { connect } from 'react-redux'
import clock from './images/clock.png'
import {endGame} from '../ducks/game.js'

const Counter = (props) => {


  
    if (props.game.playing === false) {
      return (<div className="giant">GAME OVER</div>)
    }
    else if (props.game.mines === 1){
     return( <div className="giant">{props.game.mines} mine remaining</div>)
    }
    else {
    return (<div className="giant">{props.game.mines} mines remaining</div>)
    }
    
  
}


function mapStateToProps(state){
  return {game: state.gameReducer} 
}

export default connect(mapStateToProps, {endGame})(Counter)