import { userSvg } from './userSvg.js'
import { editSvg } from './editSvg.js'
import { okSvg } from './okSvg.js'
import { xSvg } from './xSvg.js'
import { circleSvg } from './circleSvg.js'

const userSvgElements = [...document.querySelectorAll(".userSvg")]
const editSvgElements = [...document.querySelectorAll(".edit")]

userSvgElements.forEach(x=>{
    x.innerHTML = userSvg
}
)

editSvgElements.forEach(x=>{
    x.innerHTML = editSvg
})

export const showEditSvg = (element)=>
{
    element.innerHTML = editSvg
}

export const showOkSvg = (element)=>
{
    element.innerHTML = okSvg
}

export const addGameItem = (type,element) =>
{
    if(type === "x")
    {
        element.innerHTML = xSvg
    }
    else if(type === "o")
    {
        element.innerHTML = circleSvg
    }
}



