let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const submitButton = document.getElementById('submit-btn');
const guessInput = document.getElementById('guess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('reset-btn');

submitButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    feedback.style.color = "red";
    return;
  }

  if (userGuess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
    feedback.style.color = "blue";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "Too high! Try again.";
    feedback.style.color = "blue";
  } else {
    feedback.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    feedback.style.color = "green";
    submitButton.disabled = true;
    resetButton.style.display = "block";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
});

resetButton.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = '';
  feedback.textContent = '';
  attemptsDisplay.textContent = `Attempts: 0`;
  submitButton.disabled = false;
  resetButton.style.display = "none";
});