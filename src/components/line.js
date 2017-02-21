import React from 'react'
import Square from './square'

const Line = (props) => {

  let squares = 
  props.line.map((cell, cellIndex)=>{
     return <Square key={cellIndex} handleClick={props.handleClick}  row={props.row} column={cellIndex} /> 
   })

return (

 <tr className="row"> {squares} </tr>  )



}



export default Line