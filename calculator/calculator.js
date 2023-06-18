function computeResult(str) {
    return Function("return " + str)();
  }
  
  const main = document.querySelector(`main`);
  main.style.display = `flex`;
  main.style.justifyContent = `center`;
  main.style.fontFamily = "Courier New";
  
  let calculator = document.createElement(`div`);
  calculator.style.maxWidth = `800px`;
  calculator.style.minWidth = `350px`;
  calculator.style.width = `40vw`;
  calculator.style.height = `90vh`;
  calculator.style.minHeight = `625px`;
  calculator.style.backgroundColor = `turquoise`;
  calculator.style.display = `flex`;
  calculator.style.flexDirection = `column`;
  calculator.style.alignItems = `center`;
  calculator.style.textAlign = `center `;
  calculator.style.borderRadius = `30px`;
  calculator.style.alignSelf = `center`;
  
  let screen = document.createElement(`div`);
  screen.id = `myscreen`;
  screen.style.width = `35vw`;
  screen.style.minWidth = `265px`;
  screen.style.height = `12vh`;
  screen.style.backgroundColor = `white`;
  screen.style.border = `black solid 5px`;
  screen.style.borderRadius = `30px`;
  screen.style.marginTop = `5vh`;
  screen.style.overflowWrap = `break-word`;
  
  let buttons = document.createElement(`div`);
  buttons.style.width = `35vw`;
  buttons.style.minWidth = `265px`;
  buttons.style.height = `500px`;
  buttons.style.backgroundColor = `aquamarine`;
  buttons.style.color = `white`
  buttons.style.fontWeight = `bold`
  buttons.style.borderRadius = `15px`;
  buttons.style.marginTop = `5vh`;
  buttons.style.marginBottom = `2vh`;
  buttons.style.display = `flex`;
  buttons.style.flexDirection = `column`;
  buttons.id = `buttons`;
  
  let row1 = document.createElement(`section`);
  let openparent = document.createElement(`div`);
  openparent.innerText = `(`;
  let closeparent = document.createElement(`div`);
  closeparent.innerText = `)`;
  let modulo = document.createElement(`div`);
  modulo.innerText = `%`;
  let deleteall = document.createElement(`div`);
  deleteall.innerText = `AC`;
  
  let row2 = document.createElement(`section`);
  let seven = document.createElement(`div`);
  seven.innerText = `7`;
  let height = document.createElement(`div`);
  height.innerText = `8`;
  let nine = document.createElement(`div`);
  nine.innerText = `9`;
  let divide = document.createElement(`div`);
  divide.innerText = `/`;
  
  let row3 = document.createElement(`section`);
  let four = document.createElement(`div`);
  four.innerText = `4`;
  let five = document.createElement(`div`);
  five.innerText = `5`;
  let six = document.createElement(`div`);
  six.innerText = `6`;
  let multiple = document.createElement(`div`);
  multiple.innerText = `*`;
  let row4 = document.createElement(`section`);
  let one = document.createElement(`div`);
  one.innerText = `1`;
  let two = document.createElement(`div`);
  two.innerText = `2`;
  let three = document.createElement(`div`);
  three.innerText = `3`;
  let minus = document.createElement(`div`);
  minus.innerText = `-`;
  
  let row5 = document.createElement(`section`);
  let zero = document.createElement(`div`);
  zero.innerText = `0`;
  let dot = document.createElement(`div`);
  dot.innerText = `.`;
  let equal = document.createElement(`div`);
  equal.innerText = `=`;
  let plus = document.createElement(`div`);
  plus.innerText = `+`;
  
  // append to rows
  row1.append(openparent);
  row1.append(closeparent);
  row1.append(modulo);
  row1.append(deleteall);
  
  row2.append(seven);
  row2.append(height);
  row2.append(nine);
  row2.append(divide);
  
  row3.append(four);
  row3.append(five);
  row3.append(six);
  row3.append(multiple);
  
  row4.append(one);
  row4.append(two);
  row4.append(three);
  row4.append(minus);
  
  row5.append(zero);
  row5.append(dot);
  row5.append(equal);
  row5.append(plus);
  
  // append to buttons
  buttons.append(row1);
  buttons.append(row2);
  buttons.append(row3);
  buttons.append(row4);
  buttons.append(row5);
  
  // append to calculator
  calculator.append(screen);
  calculator.append(buttons);
  main.append(calculator);
  
  // style buttons
  let screenzone = document.querySelector(`#myscreen`);
  let buttonszone = document.querySelector(`#buttons`);
  
  let sections = buttonszone.querySelectorAll(`section`);
  sections.forEach((section) => {
    section.class = `sectionstyle`;
    section.style.display = `flex`;
    section.style.justifyContent = `space-evenly`;
    section.style.height = `100px`;
    section.style.alignItems = `center`;
  });
  
  let divs = buttonszone.querySelectorAll(`div`);
  divs.forEach((div) => {
    div.className = `calcelement`;
    div.style.height = `8vh`;
    div.style.width = `8vh`;
    div.style.minWidth = `50px`;
    div.style.minHeight = `50px`;
    div.style.maxWidth = `50px`;
    div.style.maxHeight = `50px`;
    div.style.borderRadius = `55px`
    div.style.backgroundColor = `#a020f5`;
    div.style.display = `flex`;
    div.style.justifyContent = `center`;
    div.style.alignItems = `center`;
    div.style.fontSize = `1.5rem`;
    div.addEventListener(`click`, () => {
     
      if (div.innerText === `AC`) {
        screenzone.childNodes.forEach((childnodes) => {
          childnodes.remove();
         
        });
        if (div.innerText === `AC`) {
          screenzone.childNodes.forEach((childnodes) => {
            childnodes.remove();
          });
          if (div.innerText === `AC`) {
            screenzone.childNodes.forEach((childnodes) => {
              childnodes.remove();
            });
            if (div.innerText === `AC`) {
              screenzone.childNodes.forEach((childnodes) => {
                childnodes.remove();
              });
              if (div.innerText === `AC`) {
                screenzone.childNodes.forEach((childnodes) => {
                  childnodes.remove();
                  if (div.innerText === `AC`) {
                    screenzone.childNodes.forEach((childnodes) => {
                      childnodes.remove();
                      if (div.innerText === `AC`) {
                        screenzone.childNodes.forEach((childnodes) => {
                          childnodes.remove();
                        });
                      }
                    });
                  }
                });
              }
            }
          }
        }
      } else if (div.innerText == `=`) {
    
        let operation = screenzone.innerText;
        console.log(computeResult(operation));
        screenzone.innerText = `\n ${computeResult(operation)}`;
      } else {
        let calcul = document.createTextNode(div.innerText);
        screenzone.append(calcul);
        console.log(screenzone.childNodes);
      }
    });
  });