"use strict";
const handleSubmit = () => {
    console.log("submitting");
    const person = document.getElementById('person-name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if (person.length === 0 ||
        subject.length === 0 ||
        message.length === 0) {
        const inputErrorMessage = document.getElementById('error-message');
        inputErrorMessage.style.display = 'block';
    }
    else {
        const form = document.getElementById('send-message-form');
        form.submit();
    }
};
const submitBtn = document.getElementById("submit-btn"); // assignining this constant to the document represents getting submit button on form which is in html code currently. We do this because want to give it (the button) an event. BUT to do this, we first have to grab it, which this does. 
submitBtn.addEventListener("click", handleSubmit); //call the above (submitBtn), apply default event, apply function (handleSubmit
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDekIsTUFBTSxNQUFNLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUMsS0FBSyxDQUFBO0lBQ2pGLE1BQU0sT0FBTyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFzQixDQUFDLEtBQUssQ0FBQTtJQUM5RSxNQUFNLE9BQU8sR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0IsQ0FBQyxLQUFLLENBQUE7SUFFOUUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDbkIsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUUsQ0FBQTtRQUNuRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtLQUM5QztTQUFNO1FBQ0wsTUFBTSxJQUFJLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBcUIsQ0FBQTtRQUM5RSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7S0FDZDtBQUNILENBQUMsQ0FBQTtBQUVELE1BQU0sU0FBUyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUUsWUFBWSxDQUFpQixDQUFBLENBQUMsNE9BQTRPO0FBQ3RULFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQywrRUFBK0UifQ==