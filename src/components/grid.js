import React from 'react' 
import Line from './line'
import {connect} from 'react-redux' 

const Grid = (props) => {

  let lines =  
  props.flex.map((line, lineIndex)=>{
      return <Line line={line} row={lineIndex} key={lineIndex} />
    })

  return ( 
    <table className="table"><tbody>{lines}</tbody></table> 
  )

}

function mapStateToProps(state, props){
  return {flex: state.gridReducer.grid} 
}

export default connect(mapStateToProps)(Grid)