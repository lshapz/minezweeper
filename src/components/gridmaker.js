function gridMaker (height, width){

  var emptyArray = [];

  for(var i=0; i<height; i++) {
      emptyArray.push(new Array(width).fill(null));
  }
  if (height * width < 100) {
    Array.from(Array(10)).forEach((x, i)=>{
      let row =  Math.floor((Math.random() * height))
      let column =  Math.floor((Math.random() * width))
      emptyArray[row][column] = "mine"
    })
  }
  else if (height * width < 250 && height * width >= 100 ) {
    Array.from(Array(3)).forEach((x, i)=>{
      let row =  Math.floor((Math.random() * height))
      let column =  Math.floor((Math.random() * width))
      emptyArray[row][column] = "mine"
    })
  }
  else if (height * width > 250 && height * width < 400) {
    Array.from(Array(40)).forEach((x, i)=>{
      let row =  Math.floor((Math.random() * height))
      let column =  Math.floor((Math.random() * width))
      emptyArray[row][column] = "mine"
    })
  }
  else {
    Array.from(Array(60)).forEach((x, i)=>{
      let row =  Math.floor((Math.random() * height))
      let column =  Math.floor((Math.random() * width))
      emptyArray[row][column] = "mine"
    })
  }

  let numbersArray = emptyArray.map((line, row)=>{
    return line.map((cell, column)=>{
    let mines = 0 
    let neighbors = [ 
      [row-1, column-1], [row-1, column], [row-1, column+1], 
      [row, column-1], [row, column+1],
      [row+1, column-1], [row+1, column], [row+1, column+1]
    ]
    neighbors.forEach((friend)=>{
      let [friendRow, friendColumn] = friend
      if ((friendRow >= 0 && friendRow <= height - 1) && (friendColumn >= 0 && friendColumn <= width - 1)) {
        if (emptyArray[friendRow][friendColumn] === "mine"){
          mines += 1
        }
      }
    })
    if (cell === "mine") {
      mines = "mine"
    }
    return mines
    })
  })

  let objectsArray = numbersArray.map((line, rowIndex)=>{
    return line.map((cell, columnIndex)=>{
      return {row: rowIndex, column: columnIndex, flag: false, mine: cell === 'mine' ? true : false, clicked: false, text: cell }
    })
  })

  let mineCount = objectsArray.reduce((lineA,lineB)=>{
      return lineA.concat(lineB)
    }).filter(square=>{
      return square.mine === true
    })
    
  return [objectsArray, mineCount.length]
  
}

export default gridMaker