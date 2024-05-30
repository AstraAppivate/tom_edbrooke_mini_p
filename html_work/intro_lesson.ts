// This arrow function prints a message to the console. It's useful as we can confirm the button does a thing when we click it. 
const buttonclicked = () => {
    const generalSkills = document.querySelector (".make-brown") as HTMLElement
    generalSkills.style.background = 'blue'

    console.log('you clicked the button')
  }

//This first sets a variable that goes into the dom and grabs the btn element from html
const button = document.getElementById('btn')!

// upon clicking button, the event listener applies the buttonclicked function.
button.addEventListener('click', buttonclicked)


const checkPerson = (event: SubmitEvent) => { //This function is also linked on the HTML side. 
    event.preventDefault() //This stops the form actually submitting, enabling me to validate the input. 
    
    const person = (document.getElementById('person-name') as HTMLInputElement).value
    const skill = (document.getElementById('skill-name') as HTMLInputElement).value // we grab the elements from the HTML side we want to validate
  
    if (person.length === 0 || skill.length === 0) { //if statement sets the conditions to validate
      const inputErrorMessage = document.getElementById('input-error-message')! //grabs the error message from HTML side 
      inputErrorMessage.style.display = 'block' //style to display your error message
    } else { //if input passes without error, we use the string literal below.
      alert(`${person  } likes ${ skill}`)
    }
  }
