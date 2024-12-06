import { winSVG } from './svg/winSVG.js'
import { loseSVG } from './svg/loseSVG.js'
import { drawSVG } from './svg/drawSVG.js'

const arrayPlayer1 = []
let arrayPlayer2 = []


const showStats = ()=>
{
    const player1 = document.querySelector(".statsPlayer1")
    const player2 = document.querySelector(".statsPlayer2")

    if(arrayPlayer1.at(-1) === "win")
    {
        player1.innerHTML += `<div class="statsItem">${winSVG}</div>`
    }
    else if(arrayPlayer1.at(-1) === "lose")
    {
        player1.innerHTML += `<div class="statsItem">${loseSVG}</div>`
    }
    else
    {
        player1.innerHTML += `<div class="statsItem">${drawSVG}</div>`    
    }


    if(arrayPlayer2.at(-1) === "win")
    {
        player2.innerHTML += `<div class="statsItem">${winSVG}</div>`
    }
    else if(arrayPlayer2.at(-1) === "lose")
    {
        player2.innerHTML += `<div class="statsItem">${loseSVG}</div>`
    }
    else
    {
        player2.innerHTML += `<div class="statsItem">${drawSVG}</div>`    
    }
}


export const updateStats = (result) =>
{
    arrayPlayer1.push(result)
    arrayPlayer2 = arrayPlayer1.map(x=>{
        if(x === "win")
        {
            return x = "lose"
        }
        else if(x === "lose")
        {
            return x = "win"
        }
        else
        {
            return x
        }
    })

    showStats()
}