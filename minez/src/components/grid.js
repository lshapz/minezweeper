import React from 'react' 
import Gridmaker from './flexfield'
import Square from './square'
import Line from './Line'

const Grid = () => {

let lines =   Gridmaker(10).map((line, lineIndex)=>{
            return <Line line={line} index={lineIndex} key={lineIndex} />
              })


return ( <div className="container"> {lines} </div> )



}



export default Grid