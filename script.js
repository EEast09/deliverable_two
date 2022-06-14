let person = prompt("Welcome to GC mini golf! What is your name?", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! Would you like to play 3 or 6 holes?";
}