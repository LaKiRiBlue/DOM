// //Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

//SELECTORS

// .querySelector()
// .querySelectorAll()
// .getElementById()

//let important = document.getElementsByClassName('important')
let important = document.querySelectorAll('.important')

for (let i = 0; i < important.length; i++) {
   //use the for loop to go trough all elements 
    important[i].setAttribute('title', 'This is an important item')
    // in the brackets 'titl' is a neme and 'This is an important item'is a value!!!
    //each element is being looped through and added attribute
    console.log(important[i]);
  }
  
  // Select all the img tags and loop through them. 
//   If they have no important class, turn their display property to none

let img = document.querySelectorAll('img')
for (let i=0; i<img.length; i++) {
    if (img[i].classList.contains('important') === true) {

    } else {
        img[i].style.display = 'none';
    }
}
/*Give each of the paragraph a random text color (different for each one) 
UNLESS it has a class then leave it as it is.*/

let colorSelector = document.querySelectorAll('p');
for (let i = 0; i < colorSelector.length; i++) {
    if (colorSelector[i].classList.length > 0) {

    } else {
        colorSelector[i].style.color = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
        }
    }
