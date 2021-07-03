//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”




// DECLARATIONS // 
const input = require('readline-sync');
let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let mealOptions = [protein, grain, vegetable, beverage, dessert]; // pantry


//----// How do I code this better / more DRY?
let astronaut1 = [], astronaut2 = [], astronaut3 = [], astronaut4 = [], astronaut5 = [], astronaut6 = []; 

let hungryAstronauts = [astronaut1, astronaut2, astronaut3, astronaut4, astronaut5, astronaut6];
//----//


// FUNCTIONS // 
function mealBuilder(mealOptions, person) {
  for (let i = 0; i < mealOptions.length; i++) {
    person.push(mealOptions[i][0]);
    mealOptions[i].shift();
  }
  // return person;
}

function kaleCheck(meal) {
  for (let i = 0; i < meal.length; i++) {
    if (meal[i] === "kale") {
      return true;
    }
  }
}

// START //
// Validates UserInput on the amount of meals to make
let mealAmount = 0;
while (!(mealAmount > 0 && mealAmount < 7)) {
  mealAmount = Number(input.question("How many meals would you like to make today? Enter a number between 1 and 6: "));
} 

// Makes the meals for the amount of meals UserInput on previous loop (mealAmount)
for (let i = 0; i < mealAmount; i++) {
  mealBuilder(mealOptions, hungryAstronauts[i])
}

// Meal Output String Literals
for (let i = 0; i < mealAmount; i++) {
  console.log(`\nAstronaut ${i+1} is going to have ${hungryAstronauts[i].join(" ")}.`);

  if (kaleCheck(hungryAstronauts[i])) {
    console.log(`Don’t worry, Astronaut ${i+1} can have double chocolate tomorrow.`);
  }
}