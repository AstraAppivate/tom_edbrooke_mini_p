const handleSubmit = () => {
  console.log("submitting")
  const person = (document.getElementById('person-name') as HTMLInputElement).value
  const subject = (document.getElementById('subject') as HTMLInputElement).value
  const message = (document.getElementById('message') as HTMLInputElement).value

  if (person.length === 0 ||
      subject.length === 0 ||
      message.length === 0) {
        const inputErrorMessage = document.getElementById('error-message')!
        inputErrorMessage.style.display = 'block'
  } else {
    const form = (document.getElementById('send-message-form') as HTMLFormElement)
    form.submit()
  }
}

const submitBtn = (document.getElementById ("submit-btn") as HTMLElement) // assignining this constant to the document represents getting submit button on form which is in html code currently. We do this because want to give it (the button) an event. BUT to do this, we first have to grab it, which this does. 
submitBtn.addEventListener("click", handleSubmit); //call the above (submitBtn), apply default event, apply function (handleSubmit

