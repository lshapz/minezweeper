import React from 'react'
import Gridmaker from './flexfield'
import Square from './square'

const Grid = () => {

let made = Gridmaker(10)

let squares = 
  made.map((line, lineIndex)=>{
  return line.map((cell, cellIndex)=>{
     return <div className="square"> {cell} </div>
   })
  })

return ( <div> {squares} </div> )



}



export default Grid