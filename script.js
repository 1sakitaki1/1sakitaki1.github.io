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
	var previousQuestion = ""; // Keep track of the previous question
  
	function generateRandomQuestion() {
	  var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	  letterElement.textContent = randomLetter;
	  questionElement.style.opacity = 0;
	  
	  setTimeout(function() {
		var randomQuestion = generateUniqueQuestion(randomLetter);
		questionElement.textContent = randomQuestion;
		questionElement.style.opacity = 1;
	  }, 1000);
	}
  
	// Function to generate a unique question different from the previous one
	function generateUniqueQuestion(randomLetter) {
	  var questions = [
		"Name a person that starts with the letter " + randomLetter,
		"Name an animal that starts with the letter " + randomLetter,
		"Name a country that starts with the letter " + randomLetter,
		"Name a food that starts with the letter " + randomLetter,
	  ];
  
	  var randomIndex;
	  var randomQuestion;
  
	  do {
		randomIndex = Math.floor(Math.random() * questions.length);
		randomQuestion = questions[randomIndex];
	  } while (randomQuestion === previousQuestion); // Repeat until a different question is generated
  
	  previousQuestion = randomQuestion; // Update the previous question
	  return randomQuestion;
	}
  
	function resetLetter() {
	  letterElement.textContent = "";
	  questionElement.textContent = "";
	}
  
	generateRandomQuestion();
  });
  
  
