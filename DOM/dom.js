/*
Add the following elements to the container using ONLY javascript
- do not add any HTML or CSS code:

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
    1. another <h1> that says “I’m in a div”
    2. a <p> that says “ME TOO!”
    3. Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const container = document.querySelector('#container'); //storing the container div as a variable

//1.
const redText = document.createElement('p'); //creating p tag and storing it as redText variable

redText.textContent = "Hey I'm red!"; //manipulating element by giving it text content
redText.style.color = "red"; // manipulating element by giving it an inline style of color='red'

container.appendChild(redText); //once ready, adding redText to end of container div.

//2.
const blueText = document.createElement('h3');

blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";

container.appendChild(blueText);

//3.
const division = document.createElement("div");

division.style.backgroundColor = "pink";
division.style.borderColor = 'black';

//3.1

const divi = document.createElement("h1");

divi.textContent = "I'm in a div"

division.appendChild(divi);

//3.2
const meToo = document.createElement('p');

meToo.textContent = "ME TOO!";

division.appendChild(meToo);

//3.3
container.appendChild(division); //appending to container after appending two child elements to division
