
console.log(document.title);

document.title = 'Modifying the DOM'
console.log(document.title);

document.body.style.background = 'hotpink'
console.log(document.body.style.background);

const bodyElement = document.body.children;

for (let i = 0; i< bodyElement.length; i++) {
  console.log(bodyElement[i]);
  
}
 let string = 4