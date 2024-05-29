"use strict";
const myMove = () => {
    const element = document.getElementById('myAnimation'); // get the thing called myAnimation (HTML)
    let position = 0; //set a plan var of 0
    const frame = () => {
        if (position == 350) { //if the position gets to 350 pixels
            clearInterval(id); // cancells the recursion of adding additional pixels
        }
        else {
            position++; //else, add something to position to move it along by 1 pixels to placeholder (+=)
            element.style.top = `${position}px`; // these two define position of top and left side, as it's moving along by adding +1 to these values, which moves the square
            element.style.left = `${position}px`; // x and y respectively, these get manipulated
        }
    };
    const id = setInterval(frame, 10); //we then call frame and set a set a speed at arg2, bigger is slower
};
const button = document.getElementById('myButton'); // get mybutton from HTML
button.addEventListener('click', myMove); // add the event above to the click action. These are KWARGS
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFO0lBQ2xCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFFLENBQUEsQ0FBRSwwQ0FBMEM7SUFDbkcsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFBLENBQUMscUJBQXFCO0lBQ3RDLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNqQixJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQUUsRUFBRyxvQ0FBb0M7WUFDMUQsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUkscURBQXFEO1NBQzNFO2FBQU07WUFDTCxRQUFRLEVBQUUsQ0FBQSxDQUFFLGtGQUFrRjtZQUM5RixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVUsSUFBSSxDQUFBLENBQUMsNEhBQTRIO1lBQ2xLLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsUUFBVSxJQUFJLENBQUEsQ0FBQyw4Q0FBOEM7U0FDdEY7SUFDSCxDQUFDLENBQUE7SUFDRCxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUUsb0VBQW9FO0FBQ3pHLENBQUMsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFFLENBQUEsQ0FBQyx5QkFBeUI7QUFDN0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQSxDQUFDLDREQUE0RCJ9