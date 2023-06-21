document.addEventListener("DOMContentLoaded", function() {
	var letterElement = document.getElementById("letter");
	var questionElement = document.getElementById("question");
	var generateButton = document.getElementById("generate-btn");
  
	generateButton.addEventListener("click", function() {
	  var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	  letterElement.textContent = randomLetter;
	  questionElement.style.opacity = 0;
	  setTimeout(function() {
		generateRandomQuestion();
		questionElement.style.opacity = 1;
	  }, 1000);
	});
  });
  
  // Get the letter and question elements
  const letterElement = document.getElementById("letter");
  const questionElement = document.getElementById("question");
  
  // Function to generate a random letter
  function generateLetter() {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const randomIndex = Math.floor(Math.random() * letters.length);
	const randomLetter = letters.charAt(randomIndex);
	letterElement.textContent = randomLetter;
  }
  
  // Function to generate a random question
  function generateRandomQuestion() {
	const randomLetter = letterElement.textContent;
	const questions = [
	  "Name a person that starts with the letter " + randomLetter,
	  "Name an animal that starts with the letter " + randomLetter,
	  "Name a country that starts with the letter " + randomLetter,
	  "Name a food that starts with the letter " + randomLetter,
	];
	const randomIndex = Math.floor(Math.random() * questions.length);
	const randomQuestion = questions[randomIndex];
	questionElement.textContent = randomQuestion;
  }
  
  // Function to reset the letter and question
  function resetLetter() {
	letterElement.textContent = "";
	questionElement.textContent = "";
  }
  
  // Generate letter initially
  generateLetter();
  

  document.addEventListener("DOMContentLoaded", function() {
	var letterElement = document.getElementById("letter");
	var questionElement = document.getElementById("question");
  
	function generateRandomQuestion() {
	  var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	  letterElement.textContent = randomLetter;
	  questionElement.style.opacity = 0;
	  setTimeout(function() {
		questionElement.textContent =
		  "Name a person that starts with the letter " + randomLetter;
		questionElement.style.opacity = 1;
	  }, 1000);
	}
  
	function resetLetter() {
	  letterElement.textContent = "";
	  questionElement.textContent = "";
	}
  
	generateRandomQuestion();
  });
  

  document.addEventListener("DOMContentLoaded", function() {
	var letterElement = document.getElementById("letter");
	var questionElement = document.getElementById("question");
  
	function generateRandomQuestion() {
	  var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	  letterElement.textContent = randomLetter;
	  questionElement.style.opacity = 0;
	  setTimeout(function() {
		questionElement.textContent =
		  "Name a person that starts with the letter " + randomLetter;
		questionElement.style.opacity = 1;
	  }, 1000);
	}
  
	function resetLetter() {
	  letterElement.textContent = "";
	  questionElement.textContent = "";
	}
  
	generateRandomQuestion();
  });
  

  
