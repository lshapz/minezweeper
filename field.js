function grid (){

var array = [];

  for(var i=0; i<20; i++) {
      array.push(new Array(20).fill(null));
  }


let newer_array = array.map((item, index)=>{
 let mineA =  Math.floor((Math.random() * 20) + 1)
 let mineB =  Math.floor((Math.random() * 20) + 1)
 let mineC =  Math.floor((Math.random() * 20) + 1)
 let mineD =  Math.floor((Math.random() * 20) + 1)
 item[mineA] = "mine"
 item[mineB] = "mine"
 item[mineC] = "mine"
 item[mineD] = "mine"

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
    else if (lineIndex === 19 && cellIndex === 19){
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
    else if (lineIndex === 0 && cellIndex === 19){
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
    else if (lineIndex === 19 && cellIndex === 0){
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

    else if (lineIndex === 19){
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
    else if (cellIndex === 19)
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

grid()