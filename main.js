// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  // Calculate & Output Letter Grades
  // English
  letter(engPercent, "eng");

  // Social Studies
  letter(socPercent, "soc");

  // Mathematics
  letter(mathPercent, "math");

  // Science
  letter(sciPercent, "sci");
}

function letter(grade, className) {
  var letter;
  if (grade >= 80) {
    letter = "A";
  } else if (grade >= 65) {
    letter = "B";
  } else if (grade >= 55) {
    letter = "C";
  } else if (grade >= 50) {
    letter = "D";
  } else {
    letter = "F";
  }
  document.getElementById(`${className}-letter`).innerHTML = letter;
}
