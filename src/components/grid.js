import React from 'react' 
import Line from './line'
import {connect} from 'react-redux' 

const Grid = (props) => {

  let lines =  
  props.flex.map((line, lineIndex)=>{
      return <Line line={line} row={lineIndex} key={lineIndex} />
    })

  return ( <span>
    <table className="table"><tbody>{lines}</tbody></table> 
    

    </span>
  )

}

function mapStateToProps(state, props){
  return {flex: state.gridReducer.grid, game: state.gameReducer} 
}

export default connect(mapStateToProps)(Grid)