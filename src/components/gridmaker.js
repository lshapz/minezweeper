function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
}



function gridMaker (height, width){

  var emptyArray = new Array(height * width).fill(null);
  var matrix = []
  if (height * width < 100) {
    
    for (let i = 0; i < 10; i++) {
      emptyArray[i] = "mine"
    }
    shuffle(emptyArray)
  
    for (var i=0; i<height; i++) {
      matrix[i] = emptyArray.splice(0, width)
    }

  }
  else if (height * width < 250 && height * width > 100 ) {

    for (let i = 0; i < 20; i++) {
      emptyArray[i] = "mine"
    }
    shuffle(emptyArray)
  
    for (var i=0; i<height; i++) {
      matrix[i] = emptyArray.splice(0, width)
    }

  }
  else if (height * width > 250 && height * width < 400) {
    for (let i = 0; i < 40; i++) {
      emptyArray[i] = "mine"
    }
    shuffle(emptyArray)
  
    for (var i=0; i<height; i++) {
      matrix[i] = emptyArray.splice(0, width)
    }
  }
  else {
    for (let i = 0; i < 60; i++) {
      emptyArray[i] = "mine"
    }
    shuffle(emptyArray)
  
    for (var i=0; i<height; i++) {
      matrix[i] = emptyArray.splice(0, width)
    }
  }

  let numbersArray = matrix.map((line, row)=>{
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
        if (matrix[friendRow][friendColumn] === "mine"){
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

