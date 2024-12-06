const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const board = document.querySelector(".gameBoard")
const info = document.querySelector(".info")




setTimeout(() => {
    player1.classList.add("opacityClass")
    player2.classList.add("opacityClass")
}, 500);

setTimeout(() => {
    board.classList.add("scaleClass")
}, 1000);

setTimeout(() => {
    info.classList.add("opacityClass")
}, 1800);