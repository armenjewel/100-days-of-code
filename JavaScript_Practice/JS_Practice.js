/*
let moonPhase = "full";
let isFoggyNight = false;

if (moonPhase === "full" || isFoggyNight === true){
    console.log("Howl!")
    }
else if (moonPhase === "mostly full"){
  console.log("Arms and legs are getting hairier")
}
else if (moonPhase === "mostly new"){
  console.log("Back on two feet")
}
else {
  console.log("Invalid moon phase")
}

//Switch statmenet
let moonPhase = "mostly full";

switch (moonPhase) {
  case "full":
    console.log("Howl!");
    break;   
	case "mostly full":
 		console.log("Arms and legs are getting hairier");
		break;
  case "mostly new":
  	console.log("Back on two feet");
   	break;
  default:
  	console.log("Invalid moon phase");
		break;
                 }
//Ternary Operator!!!

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")

/* Takeaways
The logical operator && checks if both sides of a condition are truthy.
The logical operator || checks if either side is truthy. 
*/

/*
// Get Fahrenheit and Celsius Function
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
  };
  
  const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
  };
  
  console.log('The temperature is ' + getFahrenheit(15) + '°F');
  // Output: The temperature is 59°F

//Pizza ordering program that adds total + tax
  let orderCount = 0;
  
  const takeOrder = (crustType, topping) => {
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
    orderCount === orderCount + 1;
  };
  const getSubTotal = (itemCount) => {
    return(itemCount * 7.50);
  };
  const getTax = (orderCount) => {
    return(getSubTotal(orderCount) * 0.06);
  };
  const getTotal = () => {
    return(getSubTotal(orderCount) + getTax(orderCount));
  };
  
  takeOrder('thin crust', 'spinach');
  orderCount ++;
  takeOrder('thick crust', 'mushrooms');
  orderCount ++;
  takeOrder('stuffed crust', 'bell peppers');
  orderCount ++;
  console.log(getSubTotal(orderCount));
  console.log(getTotal());

//A function decleration (bound to an identifier/name)
  function isGreaterThan (numberOne, numberTwo){
    if (numberOne > numberTwo){
      return(true);
    }
    else {
      return(false);
    }
  }
  console.log(isGreaterThan(5,7));

  /*Function expression
  Function expressions are often stored in a variable. You can identify a function expression 
  by the absence of a function name immediately trailing the function keyword.
  */

  /*
  const square = function (number) {
    return number * number;
  };
  console.log(square(5));

//One param/argument functions can be refactored to this more concise form 
const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');

const volumeOfSphere = diameter => 
return((1/6) * Math.PI * diameter * diameter * diameter);


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

*/
let stringOne = 'jack';
let stringTwo = 'pepperjack';
let newString = '';

const findUnique = (string1, string2) => {
for (var i in string1){
    if (!(i in string2)){
        newString += i;
return(newString);
    };
