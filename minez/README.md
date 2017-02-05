blah blah blah create react app

okay next steps:

  1) get the "true" state of the grid / squares stored in Redux

  2) give each square a few local states - flagged, hidden, revealed

    each state should have an associated image file (a convex box, a convex block with a flag, a clicked blank box, a clicked box with a number 1-8, a mine [angry red, your final mistake], a mine [regular type, revealed via the mistake])

  3) get them all to start as "hidden" but remember about "true"

  4) implement two different handleClicks, one for right-click (flag) and one for regular click (reveal) 

  5) if you click on a blank square it reveals all nearby blanks and the numbers around it

  6) if you click on number and you have flagged the same # of adjacent mines to the number, reveal surroundings 

  7) in general, figure out a better way to determine adjacentness than the complicated lineIndex-1 cellIndex-1 

    maybe in each square's global state, include reference key for its 3-5-8 neighbors? 

  8) if you click on a mine, prevents future clicks AND reveals all other mines 

  9) make the box more like 12x30 instead of 10x10, 10x10 is tiny as heck 

    I only say 12 because I'm using skeleton but maybe set up a grid for like 15

  10) get it to count down from total mines to how many mines you have flagged somewhere on the page for your reference 

  11) handleclick animations? 