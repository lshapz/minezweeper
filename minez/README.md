implementing minesweeper in react/redux

I need to refactor this so that clicks to Square are passed up to Grid so that the whole dude will rerender. 
and I need Gridmaker to happen in the reducer/initial_state maybe?

  1) if you click on a blank square it reveals all nearby blanks and the numbers around it (findFriends in nearby.js?)

  2) if you click on number and you have flagged the same # of adjacent mines to the number, reveal surroundings (flaggedUp in nearby.js?)

  3) in general, figure out a better way to determine adjacentness than the complicated lineIndex-1 cellIndex-1 ??? 

  4) if you click on a mine, prevents all future clicks except on 

  5) restart button
  
  6) make the box more like 12x30 instead of 10x10, 10x10 is tiny as heck 

    I only say 12 because I'm using skeleton

    should the grid be a table instead of a CSS grid? or just a different CSS grid that accomodates multiples of 5


Bug HTK:
  if you flag something then click it again to make it unflagged, the flagged count doesn't go down (make that handleClick even more complex)

http://opengameart.org/content/minesweeper-tile-set-lazarus image credit 
