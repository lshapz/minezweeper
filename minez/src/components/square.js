import React from 'react'

const Square = (props) => {


return (

  <div className="one column bold" id={props.index}>

    {props.forData}
  </div>

  )

}

export default Square