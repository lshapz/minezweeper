import React from 'react'
import { connect } from 'react-redux'
import clock from './images/clock.png'
const Counter = (props) => {


  
    if (props.game.playing === false) {
      return (<div className="giant"><img src={clock} /></div>)
    }
    else if (props.game.mines === 1){
     return( <div className="giant"><img src={clock}  />{props.game.mines} mine remaining</div>)
    }
    else {
    return (<div className="giant"><img src={clock}  />{props.game.mines} mines remaining</div>)
    }
    
  
}


function mapStateToProps(state){
  return {game: state.gameReducer} 
}

export default connect(mapStateToProps)(Counter)