document.addEventListener("DOMContentLoaded", function() {
	var letterElement = document.getElementById("letter");
	var questionElement = document.getElementById("question");
	var generateButton = document.getElementById("generate-btn");
	var stopTimerButton = document.getElementById("stop-timer-btn");
	var continueTimerButton = document.getElementById("continue-timer-btn");
	var resetButton = document.getElementById("reset-btn");
	var timerElement = document.getElementById("timer");
	var timerInterval;
	var initialTime = 10; // Initial timer duration
	var remainingTime = initialTime; // Track the remaining time

	generateButton.addEventListener("click", function() {
		startTimer();
		generateRandomLetter();
		generateRandomQuestion();
	  })
	  
	  resetButton.addEventListener("click", function() {
		resetTimer();
	  });

	  stopTimerButton.addEventListener("click", function() {
		stopTimer();
	  });

	  continueTimerButton.addEventListener("click", function() {
		continueTimer();
	  });

	generateButton.addEventListener("click", function() {
		var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
		letterElement.textContent = randomLetter;
		letterElement.style.animation = "fade-in 1s";
		questionElement.style.opacity = 0;
	
		generateButton.disabled = true; // Disable the button during the animation
	
		setTimeout(function() {
		  generateRandomQuestion();
		  questionElement.style.opacity = 1;
		  generateButton.disabled = false; // Re-enable the button after the animation
		}, 1000);
	  });
  
	resetButton.addEventListener("click", function() {
	  resetLetter();
	});
  
	// Function to generate a random letter
	function generateRandomLetter() {
	  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	  var randomIndex = Math.floor(Math.random() * letters.length);
	  var randomLetter = letters.charAt(randomIndex);
	  letterElement.textContent = randomLetter;
	}
  
	// Function to generate a random question
	function generateRandomQuestion() {
	  var randomLetter = letterElement.textContent;
	  var questions = [
		"Name a person whose name starts with the letter " + randomLetter,
		"Name an animal that starts with the letter " + randomLetter,
		"Name a country that starts with the letter " + randomLetter,
		"Name a food that starts with the letter " + randomLetter,
		"Name a sport that starts with the letter " + randomLetter,
		"Name a car brand that starts with the letter " + randomLetter,
		"Name a movie that starts with the letter " + randomLetter,
	  ];
	  var randomIndex = Math.floor(Math.random() * questions.length);
	  var randomQuestion = questions[randomIndex];
	  questionElement.textContent = randomQuestion;
	}
  
  // Function to start the timer
  function startTimer() {
    resetTimer();
    var time = 10;
    timerElement.textContent = time;
    timerInterval = setInterval(function() {
      time--;
      timerElement.textContent = time;
      if (time <= 0) {
        clearInterval(timerInterval);
        startTimer();
        generateRandomLetter();
        generateRandomQuestion(); // Added to generate a new random question
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function continueTimer() {
    startTimer();
  }

  // Function to reset the timer
  function resetTimer() {
    clearInterval(timerInterval);
    timerElement.textContent = 10;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    remainingTime = initialTime; // Reset the remaining time to initial time
    timerElement.textContent = remainingTime;
  }

  // Initial setup
  generateRandomLetter(); // Added to display an initial random letter
  generateRandomQuestion(); // Added to display an initial random question
  resetTimer();


	// Function to reset the letter and question
	function resetLetter() {
	  letterElement.style.animation = "";
	  letterElement.textContent = "";
	  questionElement.textContent = "";
	}
  
	// Initial setup
	generateRandomQuestion();
  });
  

  
