import React from 'react' 
import Line from './line'
import Timer from './timer'
import {connect} from 'react-redux' 

const Grid = (props) => {

  let lines =  
  props.flex.map((line, lineIndex)=>{
      return <Line line={line} row={lineIndex} key={lineIndex} />
    })
  let time
  if (props.game.playing)
    { time = <Timer /> }
  else if (props.game.lost || props.game.won) {
    time = <Timer prop={props.game} />
  }
  else {
    time = "0:00"
  }


  return ( <span>
    <table className="table"><tbody>{lines}</tbody></table> 
    
    <div className="medium"> {time}</div>

    </span>
  )

}

function mapStateToProps(state, props){
  return {flex: state.gridReducer.grid, game: state.gameReducer} 
}

export default connect(mapStateToProps)(Grid)