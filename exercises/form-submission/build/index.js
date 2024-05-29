"use strict";
const checkPerson = (event) => {
    event.preventDefault();
    const person = document.getElementById('person-name').value;
    const drink = document.getElementById('drink-name').value;
    if (person.length === 0 || drink.length === 0) {
        const inputErrorMessage = document.getElementById('input-error-message');
        inputErrorMessage.style.display = 'block';
    }
    else {
        alert(`${person} likes ${drink}`);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUU7SUFDekMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBRXRCLE1BQU0sTUFBTSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUssQ0FBQTtJQUNqRixNQUFNLEtBQUssR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQyxLQUFLLENBQUE7SUFFL0UsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM3QyxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUUsQ0FBQTtRQUN6RSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtLQUMxQztTQUFNO1FBQ0wsS0FBSyxDQUFDLEdBQUcsTUFBUSxVQUFXLEtBQUssRUFBRSxDQUFDLENBQUE7S0FDckM7QUFDSCxDQUFDLENBQUEifQ==