
function grid (height, width){

var array = [];

  for(var i=0; i<height; i++) {
      array.push(new Array(width).fill(null));
  }

if (height * width < 250)
  {
  Array.from(Array(20)).forEach((x, i)=>{

     let row =  Math.floor((Math.random() * height))
     let column =  Math.floor((Math.random() * width))
    array[row][column] = "mine"

  })

  }

 else if (height * width >= 250 && height * width < 400)
  {
    Array.from(Array(40)).forEach((x, i)=>{

     let row =  Math.floor((Math.random() * height))
     let column =  Math.floor((Math.random() * width))
    array[row][column] = "mine"

    })

  }
else
  {
    Array.from(Array(60)).forEach((x, i)=>{

     let row =  Math.floor((Math.random() * height))
     let column =  Math.floor((Math.random() * width))
    array[row][column] = "mine"
    })
  }

  let new_array =  array.map((line, lineIndex)=>{
  return line.map((cell, cellIndex)=>{
    let mines = 0 
    if (lineIndex === 0 && cellIndex === 0)
      { 
        if (array[lineIndex][cellIndex+1] === "mine")
          { 
            mines += 1}
         if (array[lineIndex+1][cellIndex] === "mine")
          { 
            mines += 1}
         if (array[lineIndex+1][cellIndex+1] === "mine")
          { 
            mines += 1}

      }
    else if (lineIndex === height-1 && cellIndex === width-1){
        if (array[lineIndex-1][cellIndex-1] === "mine")
          { 
            mines += 1}
         if (array[lineIndex-1][cellIndex] === "mine")
          { 
            mines += 1}
         if (array[lineIndex][cellIndex-1] === "mine")
          { 
            mines += 1}

    }
    else if (lineIndex === 0 && cellIndex === width-1){
        if (array[lineIndex][cellIndex-1] === "mine")
          { 
            mines += 1}
         if (array[lineIndex+1][cellIndex] === "mine")
          { 
            mines += 1}
         if (array[lineIndex+1][cellIndex-1] === "mine")
          { 
            mines += 1}

    }
    else if (lineIndex === height-1 && cellIndex === 0){
        if (array[lineIndex-1][cellIndex] === "mine")
          { 
            mines += 1}
         if (array[lineIndex-1][cellIndex+1] === "mine")
          { 
            mines += 1}
         if (array[lineIndex][cellIndex+1] === "mine")
          { 
            mines += 1}

    }
    else if (lineIndex === 0)
        {
      if (array[lineIndex][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex+1][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex+1][cellIndex] === "mine")
        { 
          mines += 1}
       if (array[lineIndex+1][cellIndex+1] === "mine")
        { 
          mines += 1}

        }
    else if (cellIndex === 0) 
      {
       if (array[lineIndex-1][cellIndex] === "mine")
        { 
          mines += 1}
       if (array[lineIndex-1][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex+1][cellIndex] === "mine")
        { 
          mines += 1}
       if (array[lineIndex+1][cellIndex+1] === "mine")
        { 
          mines += 1} 
      }

    else if (lineIndex === height-1){
       if (array[lineIndex][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex-1][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex-1][cellIndex] === "mine")
        { 
          mines += 1}
       if (array[lineIndex-1][cellIndex+1] === "mine")
        { 
          mines += 1}
    }
    else if (cellIndex === width-1)
      {
       if (array[lineIndex-1][cellIndex] === "mine")
        { 
          mines += 1}
       if (array[lineIndex-1][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (array[lineIndex+1][cellIndex] === "mine")
        { 
          mines += 1}
       if (array[lineIndex+1][cellIndex-1] === "mine")
        { 
          mines += 1} 
    }
    
    else {
     if (array[lineIndex-1][cellIndex-1] === "mine")
      { 
        mines += 1}
     if (array[lineIndex-1][cellIndex] === "mine")
      { 
        mines += 1}
     if (array[lineIndex-1][cellIndex+1] === "mine")
      { 
        mines += 1}
     if (array[lineIndex][cellIndex-1] === "mine")
      { 
        mines += 1}
     if (array[lineIndex][cellIndex+1] === "mine")
      { 
        mines += 1}
     if (array[lineIndex+1][cellIndex-1] === "mine")
      { 
        mines += 1}
     if (array[lineIndex+1][cellIndex] === "mine")
      { 
        mines += 1}
     if (array[lineIndex+1][cellIndex+1] === "mine")
      { 
        mines += 1}
     }

   if (cell === "mine")
      {mines = "mine"}
  
    return mines
  })

})


let newest_array = new_array.map((line, indexA)=>{
  return line.map((cell, indexB)=>{
    return {row: indexA, column: indexB, flag: false, mine: cell === 'mine' ? true : false, clicked: false, text: cell }
  })
})

let foo = newest_array.reduce((a,b)=>{return a.concat(b)})
let bar = foo.filter(square=>{return square.mine === true})

return [newest_array, bar.length]
}



export default grid