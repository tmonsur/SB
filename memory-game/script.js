// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  
  // Get references to HTML elements
  const gameContainer = document.getElementById("game");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn"); // Restart button
  const scoreDisplay = document.getElementById("score");
  const bestScoreDisplay = document.getElementById("best-score");

  // Array of colors for the cards
  let COLORS = [
      "red",
      "blue",
      "green",
      "orange",
      "purple",
      "red",
      "blue",
      "green",
      "orange",
      "purple"
  ];

  // Initialize variables
  let firstCard = null;
  let secondCard = null;
  let isFlipping = false;
  let score = 0;
  let bestScore = localStorage.getItem('bestScore') || 0;

  // Event listeners for start and restart buttons
  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", startGame);

  // Function to start the game
  function startGame() {
      gameContainer.innerHTML = "";
      score = 0;
      updateScore();
      bestScoreDisplay.textContent = `Best Score: ${bestScore}`;
      restartBtn.style.display = "none";
      let shuffledColors = shuffle(COLORS);
      createDivsForColors(shuffledColors);
  }

  // Function to shuffle an array
  function shuffle(array) {
      let counter = array.length;

      while (counter > 0) {
          let index = Math.floor(Math.random() * counter);
          counter--;

          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }

      return array;
  }

  // Function to create card elements for colors
  function createDivsForColors(colorArray) {
      for (let color of colorArray) {
          const newDiv = document.createElement("div");
          newDiv.classList.add("card");
          newDiv.classList.add(color);
          newDiv.addEventListener("click", handleCardClick);
          gameContainer.appendChild(newDiv);
      }
  }

  // Function to handle card click event
  function handleCardClick(event) {
      const clickedCard = event.target;

      // Ignore clicks on already matched cards, when two cards are already flipped, or if clicking same card twice
      if (clickedCard === firstCard || isFlipping || clickedCard.classList.contains('matched')) {
          return;
      }

      clickedCard.style.backgroundColor = clickedCard.classList[1];
      score++;
      // Update score display
      updateScore();

      if (!firstCard) {
          firstCard = clickedCard;
      } else {
          secondCard = clickedCard;
          isFlipping = true;

          if (firstCard.className === secondCard.className) {
              // Match found
              setTimeout(() => {
                  firstCard.classList.add('matched');
                  secondCard.classList.add('matched');
                  resetCards();
              }, 1000);
          } else {
              // No match, flip cards back after 1 second
              setTimeout(() => {
                  firstCard.style.backgroundColor = '';
                  secondCard.style.backgroundColor = '';
                  resetCards();
              }, 1000);
          }
      }
  }

  // Function to reset cards and check game end condition
  function resetCards() {
      firstCard = null;
      secondCard = null;
      isFlipping = false;

      if (document.querySelectorAll('.matched').length === COLORS.length) {
          // Check if current score is lower than best score
          if (score < bestScore) {
              bestScore = score;
              localStorage.setItem('bestScore', bestScore);
              bestScoreDisplay.textContent = `Best Score: ${bestScore}`;
          }
          // Show congratulations message
          alert('Congratulations! You win!');
          restartBtn.style.display = "inline-block";
          gameContainer.appendChild(restartBtn);
      }
  }

  // Function to update score display
  function updateScore() {
      scoreDisplay.textContent = `Score: ${score}`;
  }
});
