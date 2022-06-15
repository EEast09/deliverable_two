let person = prompt("Welcome to GC mini golf! What is your name?", "Harry Potter");

if (person != null) {
  prompt("Hello " + person + "! Would you like to play 3 or 6 holes?");

}
let numberHoles = 1
numberHoles++
let holes = prompt("Would you like to play 3 or 6 holes?");
let total = 0
for (let i = 0; i < holes; i++) {
  let putts = Number (prompt(`How many putts for holes ${numberHoles}? (par: 3) `))
  total += putts;
}
console.log(`${total}`);

let totalPar;

if (holes === 3){
  totalPar = total - 9
} else {
  totalPar = total - 18
}

if (totalPar > 18){
  console.log(`Nice try, ${person}... Your total par was: +(${totalPar}).`)
}if (totalPar < 18){
  console.log(`Great job, ${person}! Your total par was: -(${totalPar})`)
} else {
  console.log(`Good game, ${person}. Your total par was: 0."
  `)
}

if (totalPar > 9){
  console.log(`Nice try, ${person}... Your total par was: +(${totalPar}).`)
}if (totalPar < 9){
  console.log(`Great job, ${person}! Your total par was: -(${totalPar})`)
} else {
  console.log(`Good game, ${person}. Your total par was: 0."
  `)
}
