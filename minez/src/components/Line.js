

import React from 'react'
import Square from './square'

const Line = (props) => {

// debugger
let squares = 
  props.line.map((cell, cellIndex)=>{
     
     return <Square key={cellIndex} forData={cell} /> 
   })

return ( <div className="row"> {squares} </div>  )



}



export default Line