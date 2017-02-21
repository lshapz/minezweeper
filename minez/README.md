Welcome to my React/Redux implementation of Minesweeper! 


remaining todos:

  1) if you click on number and you have flagged the same # of adjacent mines to the number, reveal surroundings

    a check on each clickSquare dispatch, then iterate through nearby looking for flags, if the # matches iterate through non-flagged and dispatch clickSquare for them 

  2) timer 

    restart button ? 

  3) complexity options 

    probably needs its own reducer, or maybe part of gameReducer? 

  4) mineCount is kind of a hack, as is mine distribution in Gridmaker


  
image credit to:
http://opengameart.org/content/minesweeper-tile-set-lazarus image credit 
