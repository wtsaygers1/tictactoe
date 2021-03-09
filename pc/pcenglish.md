Objects: (each one of these is a separate part of the git strategy flow and should have its own branch)
- grid (3x3 for tictactoe but want to be able to make a grid any size for the future)
    - board layout or traditional tictactoe w/o outside border???
- 2 players (X's and O's but stretch of being able to choose other token options)
    - Player 1 always X's and Player 2 always O's w/ player 1 going first each time
    - stretch - let players choose X's or O's or (stretch of a stretch, a fun token)
    - player 1 always goes first || stretch, a randomize function that selects which player goes first each time board is initialized 
- End of Game message
    - Player 1 || 2 Wins! ()
    - Cat's Game (maybe a cute img of a cat pops up for a stretch goal)
    - program needs to recognize three blocks in a row of the same token || when all blocks are occupied 
- Result Tally
    - keeps track of record of players W-D-L
        - need to think about how to save and update this data with each game
- Restart Button
    - only shows when a game has concluded
        - Stretch: restart button shows at beginning but need two buttons that allows each player to surrender so result data can be tallied correctly
    - needs to initialize an empty board but keep the records from previous games played
- Stretch - countdown timer for speed games and if player takes longer than timer, they lose turn (stretch of stretch, be able to input how long players want timer)

INIT: 
- the board
- stretch - player token selection
- stretch - randomize turn function called determined player turn displayed
- player's record (first play is 0-0-0 but this needs to update the correct result cateogy for each player at the end of game and not be reset when restart button event occurs)

Functions:
- grid creation selecting how many rows and columns - run with first initialization
- Placing the token in the correct space (with each event of a space selection, it needs to update which player's turn it is and have the corresponding token for that player)
- Winning Possibilities (there is probably some mathematical way to calculate 3 in a row so not so much code)
    if (space 0, 1, 2 === X || O), 
    else if (space 3, 4, 5 === X || O),
    else if (space 6, 7, 8 === X || O),
    else if (space 0, 3, 6 === X || O),
    else if (space 1, 4, 7 === X || O),
    else if (space 2, 5, 8 === X || O),
    else if (0, 4, 8 === X || O),
    else if (2, 4, 6 === X || 0),
    else Cat's Game
- tally of each player
        - player 1 wins: player 1 wins increase by 1 && player 2 loses increase by 1
        - player 1 loses: player 1 loses increase by 1 && player 2 wins increase by 1
        - cat's game: player 1 && player 2 draws increase by 1

Events: 
- click to put a token in selected space 
    - each click updates so that correct players turn displays and correct token goes in the space selected 
- end of game message with result and restart button
- restart button click
    - initializes fresh board
    - tally function
