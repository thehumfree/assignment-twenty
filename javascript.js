function lifeInWeeks(age) {
  let year =  90 
  let weeks = 52
  let days  =  356
  let months = 12
  let result = year - age
  console.log(`You have ${result * days} days, ${result * weeks} weeks, and ${result * months} months left`);
}


let age = parseInt(prompt("Please Enter Your Current Age: "));

lifeInWeeks(age);
