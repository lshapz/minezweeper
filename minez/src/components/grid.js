import React from 'react' 
import Gridmaker from './flexfield'
import Square from './Square'
import Line from './Line'
import {defineSquare} from '../ducks/board.js'
import {connect} from 'react-redux' 

const Grid = (props) => {

let flex = Gridmaker(8, 8)

flex.forEach(item=>  { props.defineSquare(item)}
)


let lines =  flex.map((line, lineIndex)=>{
            return <Line line={line} row={lineIndex + 1} key={lineIndex} />
              })


// Gridmaker(8, 8).forEach(item=>{
//   defineSquare(item)
// })


return ( <div className="container"> {lines} </div> )



}



export default connect(null, {defineSquare})(Grid)