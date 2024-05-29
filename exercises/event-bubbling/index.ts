const outerClick = () => {
  console.log('Outer clicked')
}

const innerClick = () => {
  console.log('Inner clicked')
  event?.stopPropagation()
}

const mouseover = () =>{
console.log ("mouse over") // This prints text to the console telling you it's done a thing
input.style.border = "1px solid red" // what to do upon on the action

}

const mouseout = () =>{
  console.log ("mouse out")
  input.style.border = "1px solid green"
  
  }


const container = document.getElementById('container')!
const button = document.getElementById('btn')!
const dotty = document.getElementById("dot")!
const input = document.createElement("input") // create the element you want to call
input.value = "type here"
document.body.append(input)



container.addEventListener('click', outerClick)
dotty.addEventListener('click', innerClick)
button.addEventListener('click', outerClick)
input.addEventListener("mouseover", mouseover) //call the element above (input), apply event, apply function
input.addEventListener("mouseout", mouseout)

