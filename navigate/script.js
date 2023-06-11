/*Modify the script.js, do not create any new nodes!

-Select the last child of the <ol> tag and put it at the beginning of the list
-Move the <h2> of the third section in the second one and vice-versa
-Delete the last section from the DOM, we don't need it anyways
*/

/*Modify the script.js, do not create any new nodes!

Select the last child of the <ol> tag and put it at the beginning of the list
Move the <h2> of the third section in the second one and vice-versa
Delete the last section from the DOM, we don't need it anyways
*/

// Select  ol tag 
let OlElement = document.querySelector('ol');

// Select the last child of ol 
let lastChild = OlElement.lastElementChild;

// Put the last child to the beginning of the ol list
OlElement.insertBefore(lastChild, OlElement.firstElementChild);

// Select all h2 in the <section> tags
let EveryH2 = document.querySelectorAll('section h2');

// Clone h2 of the second <section>
let h2section2 = EveryH2[1].cloneNode(true);

// Clone h2 of the third <section>
let h2Section3 = EveryH2[2].cloneNode(true);

// Replace h2 of the second section with the clone of the third sec
EveryH2[1].parentNode.replaceChild(h2Section3, EveryH2[1]);

// Replace h2 of the third section with the clone of the second sec
EveryH2[2].parentNode.replaceChild(h2section2, EveryH2[2]);

// Select all <section> 
let sections = document.querySelectorAll('section');

// Remove the last <section> 
sections[sections.length - 1].remove();
