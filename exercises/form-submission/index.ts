const checkPerson = (event: SubmitEvent) => {
  event.preventDefault()
  
  const person = (document.getElementById('person-name') as HTMLInputElement).value
  const drink = (document.getElementById('drink-name') as HTMLInputElement).value

  if (person.length === 0 || drink.length === 0) {
    const inputErrorMessage = document.getElementById('input-error-message')!
    inputErrorMessage.style.display = 'block'
  } else {
    alert(`${person  } likes ${ drink}`)
  }
}
