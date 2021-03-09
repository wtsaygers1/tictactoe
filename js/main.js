// const myApp = document.getElementById("myApp");
// let header = document.createElement("h1");
// // className if multiple
// // classList.add/remove if you want to modify current classList
// header.className="header text-center";
// header.innerText = "TicTacToe";
// myApp.appendChild(header);

function generateHTML(type, classes, parent, text = "") {
    const element = document.createElement(type);
    element.className = (classes);
    element.innerText = (text);
    parent.appendChild(element);
    return element;
}
let array = [];

let container = generateHTML("div", "container", myApp);
let rowHeader = generateHTML("div", "row", container);
generateHTML("h1", "header text-center", rowHeader, "TicTacToe");

let rowPlayers = generateHTML("div", "row", container);
let colPlayers1 = generateHTML("div", "col-6 position-relative", rowPlayers);
generateHTML("div", "player position-absolute top-0 start-0", colPlayers1, "Player1");
let colPlayers2 = generateHTML("div", "col-6 position-relative", rowPlayers);
generateHTML("div", "player position-absolute top-0 end-0", colPlayers2, "Player2");

let rowBoard = generateHTML("div", "row", container)
    for (let i = 0; i < 9; i++) {
        let div = generateHTML("div", "col-4", rowBoard);
            array.push(div);
    }
    console.log(array);




