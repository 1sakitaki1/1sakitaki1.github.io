document.addEventListener("DOMContentLoaded", function() {
	var letterElement = document.getElementById("letter");
	var generateButton = document.getElementById("generate-btn");
  
	generateButton.addEventListener("click", function() {
	  var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	  letterElement.textContent = randomLetter;
	});
  });