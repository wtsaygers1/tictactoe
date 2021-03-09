# Model:
(connects with controller)
    
    c: null


# View:
(connects with model)

    m: null,
    header: "",

    init: function (model) {
        this.m = model;
        this.header = document.getElementById("header");
        const newHeader = document.createElement("h1");
        header.className = header;
        h1.appendChild("TicTacToe");
    }
- occupied and available spaces
- players turn
- player 1 record
- player 2 record
- game result message
    - when a player wins or game is a draw
- restart button
    - when the game concludes

# Controller:
(connects with model and view)

    v: null
    m: null

- initialize
    - model
    - view
    - event listeners for when a space is selected
    - 
- space is selected
    - lock the space once it is selected
    - switch to correct players symbol
- winning condition is met
    - render winner message
    - render restart button
    - increment respective players' record