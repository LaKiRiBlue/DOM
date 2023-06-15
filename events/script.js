const _initTime = Date.now();
const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');
const log = document.querySelector('.log');

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const createDisplayedSquare = (color) => {
  const displayedSquare = document.createElement('div');
  displayedSquare.classList.add('displayedsquare');
  displayedSquare.style.backgroundColor = color;
  displayedSquareWrapper.appendChild(displayedSquare);
};

const createLogEntry = (message) => {
  const logEntry = document.createElement('li');
  logEntry.textContent = message;
  log.appendChild(logEntry);
};

const deleteLogEntries = () => {
  log.innerHTML = '';
};

const deleteSquares = () => {
  const squares = document.querySelectorAll('.displayedsquare');
  squares.forEach(square => square.remove());
};

const handleKeyPress = (e) => {
  if (e.code === 'Space') {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    createLogEntry(`Spacebar pressed. Background color changed to ${randomColor}`);
  } else if (e.key === 'l') {
    deleteLogEntries();
    createLogEntry('Log cleared');
  } else if (e.key === 's') {
    deleteSquares();
    createLogEntry('Squares deleted');
  }
};

const clickOnSquare = (e) => {
  const clickedColor = e.target.classList[1];
  alert(clickedColor);
  createLogEntry(`Square clicked. Color: ${clickedColor}`);
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

document.body.addEventListener('keypress', handleKeyPress);
