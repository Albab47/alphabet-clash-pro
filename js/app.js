function handleKeyUp(event) {
  const playerPressed = event.key;

  // get the expected key press
  const currentAlphabetElem = document.getElementById("current-alphabet");
  const targetAlphabet = currentAlphabetElem.innerText.toLowerCase();

  if(playerPressed === targetAlphabet) {
    // update score
    let currentScore = geTextElemValueById('current-score');
    currentScore++;
    setTextElemValueById('current-score', currentScore);
    // start new round
    removeBackgroundColorById(targetAlphabet);
    continueGame();
  }
  else {
    // update life
    let currentLife = geTextElemValueById('current-life');
    currentLife--;
    setTextElemValueById('current-life', currentLife);
  }
}

// capture key press
document.addEventListener("keyup", handleKeyUp);

function continueGame() {
  // generate a random alphabet
  const alphabet = getRandomAlphabet();

  // display random alphabet to screen
  const currentAlphabetElem = document.getElementById("current-alphabet");
  currentAlphabetElem.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function playNow() {
  hideElementById("home");
  showElementById("play-ground");
  continueGame();
}

// console.log('pressed');
