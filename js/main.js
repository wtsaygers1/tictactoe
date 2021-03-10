// const myApp = document.getElementById("myApp");
// let header = document.createElement("h1");
// // className if multiple
// // classList.add/remove if you want to modify current classList
// header.className="header text-center";
// header.innerText = "TicTacToe";
// myApp.appendChild(header);

class Tile {

    //Model
    constructor() {
        this.value = ""
        // this.id = id -- trying to assign the individual tiles an id
    }

    //View
    // a single tile of a grid
    // value: "" || "X" || "O"

    //Controller
    // addEventListener that inputs the value of the current players turn into the tile, disables any future click of that tile, and switches to next player
    //     helper function that does all this
    //     addEventListener("click", render())
    //     function render() {
    //         If (player1) {
    //             return "X"
    //         } else {
    //             return "O"
    //         }
    //         disables click
    //         moves += moves
    //     }

    //helper function for when game is reset -- the tile needs to know that it goes back 
    //to a value of an empty string

    //         function resetTile() {
    //             displays empty tile
    //             enables click
    //         }
}

class gameGrid {

    //Model
    constructor() {
        this.array = []
        //     this.moves = 0
    }

    //View
    // the title of the game
    // the current players turn 
    // a grid 3x3 (this will be dynamically created with JS)
    // the restart button
    // modal of game result message

    //Controller

    // for loop that will check for win conditions
    //     need to keep track of number of moves
    //     run when moves > 5
    //     Conditional
    //         needs to know what the win conditions are
    //         needs to know if cat's game (all clicks are disabled)
    //         switch players turn if none of the above are met

    // addEventListener for the restart button
    //     addEventListener("click", resetBoard)
    //     functioin resetBoard(){
    //         modal display none
    //         resetTile() for each Tile
    //         stretch (increment players record)
    //     }

    //helper function that generates HTML
    //type is the element
    // function generateHTML(type, )
}

class App {

    //Model
    // constructor(){
    // dynamically render header
    // dynamically render player1 and player2
    // function displayBoard()
    // dynamically render restart button
    // modal display none
    // }

    //View
    // header
    // players
    // board
    // restart button

    //Constructor
    //     function init(){
    //         render board
    //         player selection (start as X always starts / stretch with randomize)
    //         //how do I connect moves to the Tile click
    //         moves(is this an object) = 0
    //     }

}
function generateHTML(type, classes, parent, text = "") {
    const element = document.createElement(type);
    element.className = (classes);
    element.innerText = (text);
    parent.appendChild(element);
    return element;
}

// let array = [];
// container is in the global because every element will be in the container
let container = generateHTML("div", "container", myApp);

function header() {
    // this row is specific to this header
    let row = generateHTML("div", "row", container);
    generateHTML("h1", "header text-center", row, "TicTacToe");
}

function players() {
    // this row is specific to the players
    let row = generateHTML("div", "row", container);
    // this column is specific to the row that has players
    let col = generateHTML("div", "col-6", row);
    generateHTML("div", "player text-center top-0 start-0", col, "PlayerX");
    // just call the row already created
    col = generateHTML("div", "col-6", row);
    generateHTML("div", "player text-center top-0 end-0", col, "PlayerO");
}

function grid() {
    let row = generateHTML("div", "row", container);
    for (let i = 0; i < 9; i++) {
        generateHTML("div", "col-4 border", row, i);
    }
}

function rstBtn(){
    let row = generateHTML("div", "row", container);
    generateHTML("button", "btn btn-primary", row, "Restart")
}

function render() {
    header()
    players()
    grid()
    rstBtn()
}

function init() {
    render()
}

init()








