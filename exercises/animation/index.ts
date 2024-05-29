const myMove = () => { // We want the following to happen my myclick is activated by clicking the button
  const element = document.getElementById('myAnimation')!  // get the thing called myAnimation (HTML)
  let position = 0 //set a plan var of 0
  const frame = () => {      //build an arrow function called frame
    if (position == 350) {  //if the position gets to 350 pixels
      clearInterval(id)    // cancells the recursion of adding additional pixels
    } else {
      position++  //else, add something to position to move it along by 1 pixels to placeholder (+=)
      element.style.top = `${position  }px` // these two define position of top and left side, as it's moving along by adding +1 to these values, which moves the square
      element.style.left = `${position  }px` // x and y respectively, these get manipulated
    }
  }
  const id = setInterval(frame, 10)  //we then call frame and set a set a speed at arg2, bigger is slower
}

const button = document.getElementById('myButton')! // get mybutton from HTML
button.addEventListener('click', myMove) // add the event above to the click action. These are KWARGS
