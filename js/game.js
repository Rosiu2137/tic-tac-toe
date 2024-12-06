import { user,userChange } from "./userChange.js"
import { addGameItem } from './svg/loadSVGs.js'
import { updateStats } from "./stats.js"
const board = document.querySelector(".gameBoard")
const winLine= document.querySelector(".winLine")
const info = document.querySelector('.info')

export let won = false

const restartFunc = ()=>
{
    winLine.style.opacity = '0'
    info.style.opacity = `0`
    
    const timeoutFunc = ()=>
    {
        winLine.style.display = `none`
        const boardElements = [...board.children]
        boardElements.forEach(x=>
        {
            if(x.tagName === "BUTTON")
            {
                x.innerHTML = ``
                x.dataset.value = ''
            }
        })

        info.classList.remove("infoWon")
        won = false
        userChange(true) 
        info.style.opacity = `1`
    }
    
    setTimeout(timeoutFunc, 500);
}

const winFunc = (user,line)=>
{
    const player1 = document.querySelector("#player1Name")
    const player2 = document.querySelector("#player2Name")

    won = true
    winLine.style.display = `block`
    info.innerHTML = ``
    info.style.opacity = `0`
    info.classList.add("infoWon")

    updateStats(user === "x"?"win":"lose")

    setTimeout(() => {
        info.innerHTML = `Wygrywa ${user === "x"?player1.value:player2.value}!`
    }, 500);
    setTimeout(() => {
        info.style.opacity = `1`
    }, 700);

    if(line === 1 || line === 2 || line === 3)
    {
        winLine.style.rotate = `0deg`
        winLine.style.left = `0`
        switch(line){
            case 1:
                winLine.style.top = `18%`
                break
            case 2:
                winLine.style.top = `50%`
                break
            case 3:
                winLine.style.top = `81%`
                break
        }

    }
    else if(line === 4 || line === 5 || line === 6)
    {
        winLine.style.rotate = `90deg`
        winLine.style.top = `50%`
        switch(line)
        {
            case 4:
                winLine.style.left = `-31.5%`
                break
            case 5:
                winLine.style.left = `0%`
                break
            case 6:
                winLine.style.left = `31.5%`
                break
        }
    
    }
    else
    {
        winLine.style.top = `50%`
        winLine.style.left = `.5%`
        switch(line)
        {
            case 7:
                winLine.style.rotate = `45deg`
                break
            case 8:
                winLine.style.rotate = `135deg`
                break
        }
    }
    
    setTimeout(() => {
        winLine.style.opacity  = `1`
    }, 100);

    setTimeout(() => {
        restartFunc()
    }, 2000);

}

const checkWinFunc = (user,array)=>
{
    const ids = array.map(x=>x.id)
    if(ids.includes("1") && ids.includes("2") && ids.includes("3"))
    {
        winFunc(user,1)
    }
    else if(ids.includes("4") && ids.includes("5") && ids.includes("6"))
    {
        winFunc(user,2)
    }
    else if(ids.includes("7") && ids.includes("8") && ids.includes("9"))
    {
        winFunc(user,3)
    }
    else if(ids.includes("1") && ids.includes("4") && ids.includes("7"))
    {
        winFunc(user,4)
    }
    else if(ids.includes("2") && ids.includes("5") && ids.includes("8"))
    {
        winFunc(user,5)
    }
    else if(ids.includes("3") && ids.includes("6") && ids.includes("9"))
    {
        winFunc(user,6)
    }
    else if(ids.includes("1") && ids.includes("5") && ids.includes("9"))
    {
        winFunc(user,7)
    }
    else if(ids.includes("3") && ids.includes("5") && ids.includes("7"))
    {
        winFunc(user,8)
    }
    else
    {
        const buttons  = [...document.querySelectorAll(".btn")]

        let draw = true

        buttons.forEach(x=>{
            if(!x.innerHTML)
            {
                draw = false
            }
        })

        if(draw)
        {
            drawFunc()
        }
    }
}

const drawFunc = () =>
{
    updateStats("draw")
    info.innerHTML = ``
    info.style.opacity = `0`
    info.classList.add("infoWon")
    setTimeout(() => {
        info.innerHTML = `REMIS`
        
    }, 500);
    setTimeout(() => {
         info.style.opacity = `1`
    }, 600);

    setTimeout(() => {
        restartFunc()
    }, 3500);
}

const checkWin = (user)=>
{
    const buttons  = [...document.querySelectorAll(".btn")]
    const array = []
    buttons.forEach(x=>{
        array.push({id:x.id,value:x.dataset.value})
    })
    if(user === "x")
    {
        const xArray = array.filter(x=>x.value === "x")
        checkWinFunc("x",xArray)
    }
    else if(user === "o")
    {
        const oArray = array.filter(x=>x.value === "o")
        checkWinFunc("o",oArray)
    }
}

const btnClicked = (e) =>
{
    if(e.target.innerHTML.length == 0 && !won)
    {
        if(user)
        {
            addGameItem("x",e.target)
            e.target.dataset.value = "x"
            userChange()
            checkWin("x")
        }
        else
        {
            addGameItem("o",e.target)
            e.target.dataset.value = "o"
            userChange()
            checkWin("o")
        }
    }
    
}

board.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON")
    {
        btnClicked(e)
    }
})

