"use strict";
const handleBlueButtonClick = () => {
    const blueParagraph = document.querySelector('.highlight-blue'); //  We go to the DOM and select the first element found in html matching highlight-blue
    const par4 = document.querySelector('#par-4'); // This grabs para 4 by it's corresponding html ID
    blueParagraph.style.background = 'blue'; //it changes background to blue
    blueParagraph.style.color = 'white'; // changes text to white
    par4.style.background = 'green'; // sets para 4 to green
    par4.style.color = 'white'; // sets to white
};
const handleRedButtonClick = () => {
    const paragraphs = document.querySelectorAll('.highlight-red'); // . means class. Get a list of HTML elements. 
    paragraphs.forEach(//we now call paragraphs and start a for loop with forEach (does a thing to each element)
    function (i) {
        i.style.background = 'red';
        i.style.color = 'white';
        // i.style.border = "dotted"
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLEVBQUU7SUFDakMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FBQSxDQUFDLHVGQUF1RjtJQUN0SyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQSxDQUFDLGtEQUFrRDtJQUMvRyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUEsQ0FBQywrQkFBK0I7SUFDdkUsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBLENBQUMsd0JBQXdCO0lBRTVELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQSxDQUFDLHVCQUF1QjtJQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUEsQ0FBQyxnQkFBZ0I7QUFFN0MsQ0FBQyxDQUFBO0FBRUQsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUE0QixDQUFBLENBQUMsK0NBQStDO0lBQzFJLFVBQVUsQ0FBQyxPQUFPLENBQUUseUZBQXlGO0lBQzVHLFVBQVUsQ0FBQztRQUNULENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUMxQixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUE7UUFDdkIsNEJBQTRCO0lBQzlCLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBIn0=