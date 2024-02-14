function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getRandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    // get a random index alphabet 0-25
    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    return alphabets[index];
}

function geTextElemValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const numberedValue = parseInt(elementValueText);
    return numberedValue;
}

function setTextElemValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

