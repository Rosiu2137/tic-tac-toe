import './svg/loadSVGs.js'
import './game.js'

import { showOkSvg, showEditSvg } from './svg/loadSVGs.js'
import { userChange,user } from './userChange.js'

const editPlayer1 = document.querySelector("#editPlayer1")
const editPlayer2 = document.querySelector("#editPlayer2")
const player1Name = document.querySelector("#player1Name")
const player2Name = document.querySelector("#player2Name")




const calcNameWidth = (user)=>
{
    if(user === "user1")
    {    
        const length = player1Name.value.length
        player1Name.style.width = `${length*1.3}rem`
    }
    else if(user === "user2")
    {
        const length = player2Name.value.length
        player2Name.style.width = `${length*1.35}rem`
    }
}

const saveEdit = (user)=>
{
    if(user === "user1")
    {
        window.removeEventListener("click",windowClickedUser1)
        calcNameWidth('user1')
        player1Name.disabled = true
        player1Name.blur()
        player1Name.classList.remove("inputFocused")
        showEditSvg(editPlayer1)
        localStorage.setItem("player1Name",player1Name.value)
        userChange(true)
    }
    else if(user === "user2")
    {
        window.removeEventListener("click",windowClickedUser2)
        calcNameWidth('user2')
        player2Name.disabled = true
        player2Name.blur()
        player2Name.classList.remove("inputFocused")
        showEditSvg(editPlayer2)
        localStorage.setItem("player2Name",player2Name.value)
        userChange(true)
    }
}

const windowClickedUser1 = (e)=>
{
    if(e.target.id != "player1Name")
    {
        saveEdit("user1")
    }
}
const windowClickedUser2 = (e)=>
{
    if(e.target.id != "player2Name")
    {
        saveEdit("user2")
    }
}

const editName = (user)=>
{
    if(user === 1)
    {
        player1Name.disabled = false
        player1Name.focus()
        player1Name.classList.add("inputFocused")
        player1Name.setSelectionRange(player1Name.value.length, player1Name.value.length);
        setTimeout(() => {
            window.addEventListener("click",windowClickedUser1)
        }, 20);
        showOkSvg(editPlayer1)
    }
    else
    {
        player2Name.disabled = false
        player2Name.focus()
        player2Name.classList.add("inputFocused")
        player2Name.setSelectionRange(player1Name.value.length, player1Name.value.length);
        setTimeout(() => {
            window.addEventListener("click",windowClickedUser2)
        }, 20);
        showOkSvg(editPlayer2)
    }

}

editPlayer1.addEventListener("click",e=>editName(1))
editPlayer2.addEventListener("click",e=>editName(2))


const checkNames = ()=>
{
    const player1 = localStorage.getItem("player1Name")
    const player2 = localStorage.getItem("player2Name")
    if(player1)
    {
        player1Name.value = player1
    }
    else
    {
        player1Name.value = "Player 1"
    }
    if(player2)
    {
        player2Name.value = player2
    }
    else
    {
        player2Name.value = "Player 2"
    }
    calcNameWidth("user1")
    calcNameWidth("user2")
}

checkNames()

userChange()


import './animation.js'