/*Modify the script.js to create a new <section> with a 
random background-color for each learner in your group. 
This section should contain a paragraph with the name of the learner. 
Those sections should be appended in the <article>
If the background is dark the text should be white, 
if the background is light the text should be black
Find a way so that 
everytime you load the page the order of the elements changes!*/


let learner = ["Chandler", "Monica", "Joey", "Phoebe", "Ross", "Rachel"];

let article = document.querySelector("article");

for (let i = 0; i < learner.length; i++) {
  let paragraph = document.createElement('p');
  
  let newSection = document.createElement('section');
  
  // if the random number is lower than 65536, his hexadecimal will be in 5 positions
  // So you need padStart to add leading 0 to have a "normal" color.
  // For exemple : 65535 is #0FFFFF which is converted to #FFFFF and that is not recognised as a 'color'
  
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

  newSection.style.backgroundColor = randomColor
  newSection.style.color = makeTextColor(randomColor);
  let newContent = document.createTextNode(learner[i]);

  paragraph.appendChild(newContent);
  newSection.appendChild(paragraph);
  article.appendChild(newSection);



}

function makeTextColor (hexcolor) {

   let r = parseInt(hexcolor.substring(1,3),16);
   let g = parseInt(hexcolor.substring(3,5),16);
   let b = parseInt(hexcolor.substring(5,7),16);
  

  let visibility = ((r*0.299)+(g*0.587)+(b*0.114));
 
  if (visibility >= 186) {
    return 'black';
  } else {
    return 'white';

 }
}

function shuffleElements() {
  const article = document.querySelector("article"); // Select the HTML article element
  const elements = Array.from(article.children); // Convert child elements into an array

  const elementsToShuffle = elements.filter(element => element.tagName !== "H2"); // Exclude <h2> elements

  elementsToShuffle.sort(() => Math.random() - 0.5); // Shuffle the array randomly

  elementsToShuffle.forEach(element => {
    article.appendChild(element); // Append the shuffled elements back into the article
  });
}
// Call the function when the page finishes loading
window.addEventListener("load", shuffleElements);

