console.log('Hello Dave!')


const greeting = document.getElementById("user-name")!
greeting.textContent = "Brendan"
greeting.style.color = "pink"
greeting.style.border = "solid"


const tag = document.createElement("p") // create an element (para) p
tag.innerText = "Changed via TypeScript" // change the innter text to show changed via typescript
document.body.appendChild(tag) //append new tag element


const pic = document.createElement("img") // create an element dynamically - I don't need to explicitly state this in my HTML. All I change is the var name and state what type it expect (as per html)
pic.src = "/Users/Thomas.Edbrooke/projects/tom_edbrooke_mini_p/html_work/banner_pic.jpeg" // change the innter text to show changed via typescript
document.body.appendChild(pic) //append new pic element

const element = document.getElementById ("content")! // This removes the content element on the HTML part: This content is fixed in HTML.
element.remove()
