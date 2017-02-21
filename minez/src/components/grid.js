import React from 'react' 
import Gridmaker from './flexfield'
import Square from './Square'
import Line from './Line'
// import {createGrid} from '../ducks/board.js'
import {connect} from 'react-redux' 
 import {flagSquare, clickSquare} from '../ducks/board.js'

class Grid extends React.Component {

constructor(props){
  super(props)
}

handleClick(event){
  event.preventDefault()
  console.log(event.target)
  if (event.type === "contextmenu"){
    this.props.flagSquare(this.props.row, this.props.column)
    // this.setState({flagged: true})
    // this.props.flagCount()
    // flagCount has to be a toggle not straight math
}
  else {  
    // debugger
    this.props.clickSquare(this.props.row, this.props.column)
    // this.setState({clicked: true})
    if (this.props.me.text === 'mine') {
      this.props.endGame()
    }
    // else if (this.props.me.text == 0) {

    //   let row = this.props.me.row
    //   let column = this.props.me.column
    //   let neighbors = [
    //   [row-1, column-1], [row-1, column], [row-1, column+1], 
    //   [row, column-1], [row, column+1],
    //   [row+1, column-1], [row+1, column], [row+1, column+1]
    //   ]
      
  // neighbors.forEach(arr=>{
  //   if (this.props.flex[arr[0]] && this.props.flex[arr[0]][arr[1]] && this.props.flex[arr[0]][arr[1]].text !== 'mine'){
  //     this.props.clickSquare(arr[0], arr[1])
  //     console.log(arr)
  //   }

  // })
  // }

  // }

    }
this.props.takeTurn()

}




// Gridmaker(8, 8).forEach(item=>{
//   defineSquare(item)
// })
render(){
  let flex = this.props.flex

let lines =  flex.map((line, lineIndex)=>{
            return <Line line={line} row={lineIndex} key={lineIndex} handleClick={this.handleClick} />
              })

return ( <div className="container"> {lines} </div> )
}


}


function mapStateToProps(state, props){
  return {flex: state.gridReducer} 
}




export default connect(mapStateToProps)(Grid)