import React from 'react'
import Square from './Square'

const Line = (props) => {

  let squares = 
  props.line.map((cell, cellIndex)=>{
     return <Square key={cellIndex} row={props.row} column={cellIndex} /> 
   })

  return (

    <tr className="row">{squares}</tr>  

  )

}

export default Line