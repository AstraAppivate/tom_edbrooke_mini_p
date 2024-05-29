"use strict";
console.log('Hello Dave!');
const greeting = document.getElementById("user-name");
greeting.textContent = "Brendan";
greeting.style.color = "pink";
greeting.style.border = "solid";
const tag = document.createElement("p"); // create an element (para) p
tag.innerText = "Changed via TypeScript"; // change the innter text to show changed via typescript
document.body.appendChild(tag); //append new tag element
const pic = document.createElement("img"); // create an element dynamically - I don't need to explicitly state this in my HTML. All I change is the var name and state what type it expect (as per html)
pic.src = "/Users/Thomas.Edbrooke/projects/tom_edbrooke_mini_p/html_work/banner_pic.jpeg"; // change the innter text to show changed via typescript
document.body.appendChild(pic); //append new pic element
const element = document.getElementById("content"); // This removes the content element on the HTML part: This content is fixed in HTML.
element.remove();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUcxQixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFBO0FBQ3RELFFBQVEsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFBO0FBQ2hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQTtBQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7QUFHL0IsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLDZCQUE2QjtBQUNyRSxHQUFHLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFBLENBQUMsd0RBQXdEO0FBQ2pHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsd0JBQXdCO0FBR3ZELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyw2SkFBNko7QUFDdk0sR0FBRyxDQUFDLEdBQUcsR0FBRywrRUFBK0UsQ0FBQSxDQUFDLHdEQUF3RDtBQUNsSixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLHdCQUF3QjtBQUV2RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFFLFNBQVMsQ0FBRSxDQUFBLENBQUMsb0ZBQW9GO0FBQ3pJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQSJ9