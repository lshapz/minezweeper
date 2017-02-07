implementing minesweeper in react/redux

square local state _eventually_ should have an associated image file (a convex box, a convex block with a flag, a clicked blank box, a clicked box with a number 1-8, a mine [angry red, your final mistake], a mine [regular type, revealed via the mistake])


  1) if you click on a blank square it reveals all nearby blanks and the numbers around it (findFriends in nearby.js)

  2) if you click on number and you have flagged the same # of adjacent mines to the number, reveal surroundings (flaggedUp in nearby.js)

  3) in general, figure out a better way to determine adjacentness than the complicated lineIndex-1 cellIndex-1 ??? 

  4) if you click on a mine, prevents all future clicks except on 

  5) restart button
  
  6) make the box more like 12x30 instead of 10x10, 10x10 is tiny as heck 

    I only say 12 because I'm using skeleton

    should the grid be a table instead of a CSS grid? or just a different CSS grid that accomodates multiples of 5


Bug HTK:
  if you flag something then click it again to make it unflagged, the flagged count doesn't go down (make that handleClick even more complex)

  why are there sometimes fewer than 20 mines upon initial render when the count is hardcoded in Gridmaker

