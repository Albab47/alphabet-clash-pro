function continueGame() {
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    // display random alphabet to screen
    const currentAlphabetElem = document.getElementById('current-alphabet');
    currentAlphabetElem.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet)
}

function playNow() {
  hideElementById('home');
  showElementById('play-ground');
  continueGame();
}
