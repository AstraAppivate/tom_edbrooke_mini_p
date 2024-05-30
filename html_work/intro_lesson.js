// This arrow function prints a message to the console. It's useful as we can confirm the button does a thing when we click it. 
var buttonclicked = function () {
    var generalSkills = document.querySelector(".make-brown");
    generalSkills.style.background = 'blue';
    console.log('you clicked the button');
};
//This first sets a variable that goes into the dom and grabs the btn element from html
var button = document.getElementById('btn');
// upon clicking button, the event listener applies the buttonclicked function.
button.addEventListener('click', buttonclicked);
var checkPerson = function (event) {
    event.preventDefault(); //This stops the form actually submitting, enabling me to validate the input. 
    var person = document.getElementById('person-name').value;
    var drink = document.getElementById('skill-name').value; // we grab the elements from the 
    if (person.length === 0 || drink.length === 0) {
        var inputErrorMessage = document.getElementById('input-error-message');
        inputErrorMessage.style.display = 'block';
    }
    else {
        alert("".concat(person, " likes ").concat(drink));
    }
};
