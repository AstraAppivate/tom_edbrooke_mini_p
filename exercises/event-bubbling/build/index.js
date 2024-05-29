"use strict";
const outerClick = () => {
    console.log('Outer clicked');
};
const innerClick = () => {
    console.log('Inner clicked');
    event === null || event === void 0 ? void 0 : event.stopPropagation();
};
const mouseover = () => {
    console.log("mouse over"); // This prints text to the console telling you it's done a thing
    input.style.border = "1px solid red"; // what to do upon on the action
};
const mouseout = () => {
    console.log("mouse out");
    input.style.border = "1px solid green";
};
const container = document.getElementById('container');
const button = document.getElementById('btn');
const dotty = document.getElementById("dot");
const input = document.createElement("input"); // create the element you want to call
input.value = "type here";
document.body.append(input);
container.addEventListener('click', outerClick);
dotty.addEventListener('click', innerClick);
button.addEventListener('click', outerClick);
input.addEventListener("mouseover", mouseover); //call the element above (input), apply event, apply function
input.addEventListener("mouseout", mouseout);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDOUIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDNUIsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGVBQWUsRUFBRSxDQUFBO0FBQzFCLENBQUMsQ0FBQTtBQUVELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFFLFlBQVksQ0FBQyxDQUFBLENBQUMsZ0VBQWdFO0lBQzNGLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQSxDQUFDLGdDQUFnQztBQUVyRSxDQUFDLENBQUE7QUFFRCxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxXQUFXLENBQUMsQ0FBQTtJQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQTtBQUV0QyxDQUFDLENBQUE7QUFHSCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFBO0FBQ3ZELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFFLENBQUE7QUFDOUMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUUsQ0FBQTtBQUM3QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsc0NBQXNDO0FBQ3BGLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFBO0FBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBSTNCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFDL0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUMzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQzVDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUEsQ0FBQyw2REFBNkQ7QUFDNUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQSJ9