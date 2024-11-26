// Array representing the number of coffees ordered by each person
let billTripArray = [2, 4, 1, 1, 2, 3];

// The cost of one coffee
let costOfCoffee = 1.25;

// This function calculates the total bill based on the number of coffees ordered
// by all people and the price per coffee.
function arrayReduce(billArray) {
  // Use reduce to sum up the total number of coffees ordered by all people
  let totalCoffeess = billArray.reduce((accumulator, currentValue) => {
    // Log the running total during the reduce operation
    // console.log(accumulator + currentValue);
    // Return the accumulated total
    return accumulator + currentValue;
  }, 0); // Initial value of the accumulator is 0

  // Calculate the total cost by multiplying the total number of coffees by the cost per coffee
  let totalCost = totalCoffeess * costOfCoffee;
  // Return the formatted total bill with two decimal places
  return `The total bill is $${totalCost.toFixed(2)}`;
}

// Get the element where the total bill message will be displayed
let textDisplay = document.querySelector(".main");
// Create a new paragraph element to display the result
let newElement = document.createElement("p");
// Set the text content of the new element to the result of arrayReduce
newElement.textContent = arrayReduce(billTripArray);
// Append the new element to the existing textDisplay element (in the DOM)
textDisplay.appendChild(newElement);
