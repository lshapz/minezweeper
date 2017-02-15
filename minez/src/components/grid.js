import React from 'react' 
import Gridmaker from './flexfield'
import Square from './Square'
import Line from './Line'
import {defineSquare} from '../ducks/board.js'
import {connect} from 'react-redux' 

const Grid = (props) => {

let lines =   Gridmaker(8, 8).map((line, lineIndex)=>{
            return <Line row={line} index={lineIndex} key={lineIndex} />
              })



return ( <div className="container"> {lines} </div> )



}



export default connect(null, {defineSquare})(Grid)