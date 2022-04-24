function loveCalculator(you, partner) {
  const randScore = Math.floor(Math.random()*100)
  alert(`${you} and ${partner} are ${randScore}% match!!`)
}


let person1 = prompt("Please Enter Your Name: ");
let person2 = prompt("Please Enter Your Partners Name: ");

loveCalculator(person1, person2)
