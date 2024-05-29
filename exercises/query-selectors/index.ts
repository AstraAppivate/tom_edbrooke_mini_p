const handleBlueButtonClick = () => {
  const blueParagraph = document.querySelector('.highlight-blue') as HTMLElement //  We go to the DOM and select the first element found in html matching highlight-blue
  const par4 = document.querySelector('#par-4') as HTMLElement // This grabs para 4 by it's corresponding html ID
  blueParagraph.style.background = 'blue' //it changes background to blue
  blueParagraph.style.color = 'white' // changes text to white

  par4.style.background = 'green' // sets para 4 to green
  par4.style.color = 'white' // sets to white
  
}

const handleRedButtonClick = () => {
  const paragraphs = document.querySelectorAll('.highlight-red') as NodeListOf<HTMLElement> // . means class. Get a list of HTML elements. 
 paragraphs.forEach( //we now call paragraphs and start a for loop with forEach (does a thing to each element)
  function (i) {  // "i" represents the thing to be itterated (element). In theis case, we're grabbing everything with highlight red. Function is applying white, red. We're doing the function action in the for loop
    i.style.background = 'red'
    i.style.color = 'white'
    // i.style.border = "dotted"
  })

}
