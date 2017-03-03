function gridMaker (height, width){

  var emptyArray = [];

  for(var i=0; i<height; i++) {
      emptyArray.push(new Array(width).fill(null));
  }

  if (height * width < 250) {
      Array.from(Array(20)).forEach((x, i)=> {
      let row =  Math.floor((Math.random() * height))
      let column =  Math.floor((Math.random() * width))
      emptyArray[row][column] = "mine"
    })

  }

  else if (height * width > 250 && height * width < 400) {
      Array.from(Array(40)).forEach((x, i)=> {
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

  let numbersArray =  emptyArray.map((line, lineIndex)=>{
    return line.map((cell, cellIndex)=>{
    let mines = 0 
    // let neighbors = [ 
    //   [row-1, column-1], [row-1, column], [row-1, column+1], 
    //   [row, column-1], [row, column+1],
    //   [row+1, column-1], [row+1, column], [row+1, column+1]
    // ]
    if (lineIndex === 0 && cellIndex === 0) {
         if (emptyArray[lineIndex][cellIndex+1] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex+1][cellIndex] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex+1][cellIndex+1] === "mine")
          { mines = 1 }
    }
    else if (lineIndex === height-1 && cellIndex === width-1) {
         if (emptyArray[lineIndex-1][cellIndex-1] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex-1][cellIndex] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex][cellIndex-1] === "mine")
          { mines = 1 }
    }
    else if (lineIndex === 0 && cellIndex === width-1) {
         if (emptyArray[lineIndex][cellIndex-1] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex+1][cellIndex] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex+1][cellIndex-1] === "mine")
          { mines = 1 }
    }
    else if (lineIndex === height-1 && cellIndex === 0) {
         if (emptyArray[lineIndex-1][cellIndex] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex-1][cellIndex+1] === "mine")
          { mines = 1 }
         if (emptyArray[lineIndex][cellIndex+1] === "mine")
          { mines = 1 }
    }
    else if (lineIndex === 0 && cellIndex !== 0) {
       if (emptyArray[lineIndex][cellIndex-1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex][cellIndex+1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex+1][cellIndex-1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex+1][cellIndex] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex+1][cellIndex+1] === "mine")
        { mines += 1 }
    }
    else if (cellIndex === 0  && lineIndex !== 0) {
       if (emptyArray[lineIndex-1][cellIndex] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex-1][cellIndex+1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex][cellIndex+1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex+1][cellIndex] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex+1][cellIndex+1] === "mine")
        { mines += 1 }
    }
    else if (lineIndex === height-1){
       if (emptyArray[lineIndex][cellIndex-1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex][cellIndex+1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex-1][cellIndex-1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex-1][cellIndex] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex-1][cellIndex+1] === "mine")
        { mines += 1 }
    }
    else if (cellIndex === width-1) {
       if (emptyArray[lineIndex-1][cellIndex] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex-1][cellIndex-1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex][cellIndex-1] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex+1][cellIndex] === "mine")
        { mines += 1 }
       if (emptyArray[lineIndex+1][cellIndex-1] === "mine")
        { mines += 1 } 
    }    
    else {
     if (emptyArray[lineIndex-1][cellIndex-1] === "mine")
      { mines += 1 }
     if (emptyArray[lineIndex-1][cellIndex] === "mine")
      { mines += 1 }
     if (emptyArray[lineIndex-1][cellIndex+1] === "mine")
      { mines += 1 }
     if (emptyArray[lineIndex][cellIndex-1] === "mine")
      { mines += 1 }
     if (emptyArray[lineIndex][cellIndex+1] === "mine")
      { mines += 1 }
     if (emptyArray[lineIndex+1][cellIndex-1] === "mine")
      { mines += 1 }
     if (emptyArray[lineIndex+1][cellIndex] === "mine")
      { mines += 1 }
     if (emptyArray[lineIndex+1][cellIndex+1] === "mine")
      { mines += 1 }
    }

    if (cell === "mine")
        {mines = "mine"}
  
    return mines
    })

  })

  let objectsArray = numbersArray.map((line, indexA)=>{
    return line.map((cell, indexB)=>{
      return {row: indexA, column: indexB, flag: false, mine: cell === 'mine' ? true : false, clicked: false, text: cell }
    })
  })

  let mineCount = objectsArray.reduce((a,b)=>{return a.concat(b)}).filter(square=>{return square.mine === true})

  return [objectsArray, mineCount.length]
  
}

export default gridMaker