import { won } from "./game.js"
const info = document.querySelector(".info")
const player1Name = document.querySelector("#player1Name")
const player2Name = document.querySelector("#player2Name")

export let user = 0

export const userChange = (nameChanged = false)=>
{
    if(!won)
    {
        if(!nameChanged)
        {
            user = !user
        }
        if(user)
        {
            info.innerHTML = player1Name.value
        }
        else
        {
            info.innerHTML = player2Name.value
        }
    }
    
}