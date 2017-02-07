import React from 'react'
import Square from './Square'

const Line = (props) => {

// debugger
let squares = 
  props.line.map((cell, cellIndex)=>{
     
     return <Square key={cellIndex} lineId={props.index} cellId={cellIndex} forData={cell} /> 
   })

return ( <div className="row"> {squares} </div>  )



}



export default Line