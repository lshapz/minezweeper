import React from 'react'
import Square from './Square'

const Line = (props) => {

// debugger
let squares = 
  props.line.map((cell, cellIndex)=>{
     
     return <Square key={cellIndex} row={props.row} column={cellIndex + 1} /> 
   })

return ( <div className="row"> {squares} </div>  )



}



export default Line