import React from 'react'
import { connect } from 'react-redux'
import Timer from './timer'

const Counter = (props) => {
  let time, count
  if (props.game.playing) { 
   time = <Timer /> 
  }
  else if (props.game.lost || props.game.won) {
   time = <Timer prop={props.game} />
  }
  else {
   time = "0:00"
  }
  if (props.game.lost === true) {
   count = (<div className="mineCount">YOU LOSE!</div>)
  }
  else if (props.grid.mines === 1){
   count =  (<div className="mineCount">{props.grid.mines} mine remaining</div>)
  }
  else if (props.game.won){
   count = (<div className="mineCount">YOU WIN!</div>)
  }
  else {
   count = (<div className="mineCount">{props.grid.mines} mines remaining</div>)
  }
  return(
    <div>
      <div className="timer">{time}</div>
      {count}
    </div>
  )
}


function mapStateToProps(state){
  return {grid: state.gridReducer, game: state.gameReducer} 
}

export default connect(mapStateToProps)(Counter)