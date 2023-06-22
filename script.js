document.addEventListener("DOMContentLoaded", function() {
	var letterElement = document.getElementById("letter");
	var questionElement = document.getElementById("question");
	var generateButton = document.getElementById("generate-btn");
	var stopTimerButton = document.getElementById("stop-timer-btn");
	var continueTimerButton = document.getElementById("continue-timer-btn");
	var resetButton = document.getElementById("reset-btn");
	var timerElement = document.getElementById("timer");
	var revealAnswerButton = document.getElementById("reveal-answer-btn");
	var timerInterval;
	var initialTime = 10; // Initial timer duration
	var remainingTime = initialTime; // Track the remaining time
  
	generateButton.addEventListener("click", function() {
	  startTimer();
	  generateRandomLetter();
	  generateRandomQuestion();
	});
  
	revealAnswerButton.addEventListener("click", revealAnswer);
  
	resetButton.addEventListener("click", function() {
	  resetLetter();
	  resetTimer();
	});
  
	stopTimerButton.addEventListener("click", function() {
	  stopTimer();
	});
  
	continueTimerButton.addEventListener("click", function() {
	  continueTimer();
	});
  
	// Function to reveal the answer
	//function revealAnswer() {
	  //var question = questionElement.textContent;
	  //var answer = getAnswerForQuestion(question);
	  //var answerElement = document.createElement("div");
	  //answerElement.id = "answer";
	  //answerElement.textContent = "Answer: " + answer;
	  //document.body.appendChild(answerElement);
  
	  //revealAnswerButton.removeEventListener("click", revealAnswer); // Disable the button after revealing the answer
	//}
  
	// Function to generate the answer
	//function getAnswerForQuestion(question) {
	  //var answers = {
		//"Name a person whose name starts with the letter X": "Xavier",
		//"Name an animal that starts with the letter X": "X-ray fish",
		// Add more question-answer pairs as needed
	  //};
  
	  //return answers[question] || "No answer found";
	//}
  
	// ...
  
	// Function to generate a random letter
	function generateRandomLetter() {
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
		"Name a color that starts with the letter " + randomLetter,
		"Name a vegetable that starts with the letter " + randomLetter,
		"Name a dessert that starts with the letter " + randomLetter,
	  ];
	  var randomIndex = Math.floor(Math.random() * questions.length);
	  var randomQuestion = questions[randomIndex];
	  questionElement.textContent = randomQuestion;
	}
  
	// Function to start the timer
	function startTimer() {
	  resetTimer();
	  var time = initialTime;
	  timerElement.textContent = time;
	  timerInterval = setInterval(function() {
		time--;
		timerElement.textContent = time;
		if (time <= 0) {
		  clearInterval(timerInterval);
		  generateRandomLetter();
		  generateRandomQuestion();
		  startTimer();
		}
	  }, 1000);
	}
  
	// Function to stop the timer
	function stopTimer() {
	  clearInterval(timerInterval);
	}
  
	// Function to continue the timer
	function continueTimer() {
	  startTimer();
	}
  
	// Function to reset the timer
	function resetTimer() {
	  clearInterval(timerInterval);
	  remainingTime = initialTime; // Reset the remaining time to initial time
	  timerElement.textContent = remainingTime;
	}
  
	// Function to reset the letter and question
	function resetLetter() {
	  letterElement.style.animation = "";
	  letterElement.textContent = "";
	  questionElement.textContent = "";
	}
  
	// Initial setup
	generateRandomLetter();
	generateRandomQuestion();
	resetTimer();
  });
  
