import React from 'react'
import Square from './Square'

const Line = (props) => {

// debugger
let squares = 
  props.line.map((cell, cellIndex)=>{
     
     return <Square key={cellIndex} handleClick={props.handleClick}  row={props.row} column={cellIndex} /> 
   })

return (

 <div className="row"> {squares} </div>  )



}



export default Line