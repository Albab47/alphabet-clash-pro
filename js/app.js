let isGamePlayOn = false;

function handleKeyUp(event) {
  if (isGamePlayOn === false) return;
  const playerPressed = event.key;

  // stop the game if Esc pressed
  if(playerPressed === 'Escape') {
    gameOver();
  }

  // get the expected key press
  const currentAlphabetElem = document.getElementById("current-alphabet");
  const targetAlphabet = currentAlphabetElem.innerText.toLowerCase();

  if(playerPressed === targetAlphabet) {
    // update score
    const currentScore = geTextElemValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElemValueById('current-score', updatedScore);
    // start new round
    removeBackgroundColorById(targetAlphabet);
    continueGame();
  }
  else {
    // update life
    const currentLife = geTextElemValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElemValueById('current-life', updatedLife);

    if (currentLife === 0) {
      gameOver();
    }
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
  // hide everything except playground
  hideElementById("home");
  hideElementById('final-score')
  showElementById("play-ground");
  // reset score and life
  setTextElemValueById('current-life', 5);
  setTextElemValueById('current-score', 0);
  isGamePlayOn = true;
  continueGame();
}

function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');
  // update final score
  const lastScore = geTextElemValueById('current-score');
  setTextElemValueById('end-score', lastScore)
  // clear selected key
  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);
  isGamePlayOn = false;
}
