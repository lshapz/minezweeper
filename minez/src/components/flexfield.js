function grid (size){

var array = [];

  for(var i=0; i<size; i++) {
      array.push(new Array(size).fill(null));
  }


let newer_array = array.map((item, index)=>{

 let mineA =  Math.floor((Math.random() * size))
 let mineB =  Math.floor((Math.random() * size))

 item[mineA] = "mine"
 item[mineB] = "mine"
 if (size > 15)
 {let mineC =  Math.floor((Math.random() * size))
 let mineD =  Math.floor((Math.random() * size))

 item[mineC] = "mine"
 item[mineD] = "mine"
}
else if (size > 25)
 {let mineE =  Math.floor((Math.random() * size))
 let mineF =  Math.floor((Math.random() * size))

 item[mineE] = "mine"
 item[mineF] = "mine"
}

 return item

})

  let new_array =  newer_array.map((line, lineIndex)=>{
  return line.map((cell, cellIndex)=>{
    let mines = 0 
    if (lineIndex === 0 && cellIndex === 0)
      { 
        if (newer_array[lineIndex][cellIndex+1] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex+1][cellIndex] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex+1][cellIndex+1] === "mine")
          { 
            mines += 1}

      }
    else if (lineIndex === size-1 && cellIndex === size-1){
        if (newer_array[lineIndex-1][cellIndex-1] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex-1][cellIndex] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex][cellIndex-1] === "mine")
          { 
            mines += 1}

    }
    else if (lineIndex === 0 && cellIndex === size-1){
        if (newer_array[lineIndex][cellIndex-1] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex+1][cellIndex] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex+1][cellIndex-1] === "mine")
          { 
            mines += 1}

    }
    else if (lineIndex === size-1 && cellIndex === 0){
        if (newer_array[lineIndex-1][cellIndex] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex-1][cellIndex+1] === "mine")
          { 
            mines += 1}
         if (newer_array[lineIndex][cellIndex+1] === "mine")
          { 
            mines += 1}

    }
    else if (lineIndex === 0)
        {
      if (newer_array[lineIndex][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex+1][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex+1][cellIndex] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex+1][cellIndex+1] === "mine")
        { 
          mines += 1}

        }
    else if (cellIndex === 0) 
      {
       if (newer_array[lineIndex-1][cellIndex] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex-1][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex+1][cellIndex] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex+1][cellIndex+1] === "mine")
        { 
          mines += 1} 
      }

    else if (lineIndex === size-1){
       if (newer_array[lineIndex][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex][cellIndex+1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex-1][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex-1][cellIndex] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex-1][cellIndex+1] === "mine")
        { 
          mines += 1}
    }
    else if (cellIndex === size-1)
      {
       if (newer_array[lineIndex-1][cellIndex] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex-1][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex][cellIndex-1] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex+1][cellIndex] === "mine")
        { 
          mines += 1}
       if (newer_array[lineIndex+1][cellIndex-1] === "mine")
        { 
          mines += 1} 
    }
    
    else {
     if (newer_array[lineIndex-1][cellIndex-1] === "mine")
      { 
        mines += 1}
     if (newer_array[lineIndex-1][cellIndex] === "mine")
      { 
        mines += 1}
     if (newer_array[lineIndex-1][cellIndex+1] === "mine")
      { 
        mines += 1}
     if (newer_array[lineIndex][cellIndex-1] === "mine")
      { 
        mines += 1}
     if (newer_array[lineIndex][cellIndex+1] === "mine")
      { 
        mines += 1}
     if (newer_array[lineIndex+1][cellIndex-1] === "mine")
      { 
        mines += 1}
     if (newer_array[lineIndex+1][cellIndex] === "mine")
      { 
        mines += 1}
     if (newer_array[lineIndex+1][cellIndex+1] === "mine")
      { 
        mines += 1}
     }

   if (cell === "mine")
      {mines = "mine"}
    

    return mines
  })

})

return new_array

}

export default grid