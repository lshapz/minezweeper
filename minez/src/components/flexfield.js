function grid (height, width){

var array = [];

  for(var i=0; i<height; i++) {
      array.push(new Array(width).fill(null));
  }

// https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e#.afe1kb9ba
let newer_array = array.map((item, index)=>{

 let mineA =  Math.floor((Math.random() * width))
 let mineB =  Math.floor((Math.random() * width))

 item[mineA] = "mine"
 if (array.indexOf(item) % 2 === 0){
  // HTK this should not be hardcoded 
  item[mineB] = "mine"}

 if (height * width > 200)
 {let mineC =  Math.floor((Math.random() * width))
 let mineD =  Math.floor((Math.random() * width))

 item[mineC] = "mine"
  

   item[mineD] = "mine"
}
else if (height * width > 300)
 {let mineE =  Math.floor((Math.random() * width))
 let mineF =  Math.floor((Math.random() * width))

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
    else if (lineIndex === height-1 && cellIndex === width-1){
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
    else if (lineIndex === 0 && cellIndex === width-1){
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
    else if (lineIndex === height-1 && cellIndex === 0){
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

    else if (lineIndex === height-1){
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
    else if (cellIndex === width-1)
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
  
  // if (mines === 0)    {  
  // }

    return mines
  })

})


let newest_array = new_array.map((line, indexA)=>{
  return line.map((cell, indexB)=>{
    return {row: indexA + 1, column: indexB + 1, flag: false, mine: cell === 'mine' ? true : false, clicked: false, text: cell }
  })
})

return newest_array
}

export default grid