// Works with arrays
var fruits = ["apple","orange","grapefruit","kiwi"];

var [first, second, ...rest] = fruits;

console.log(first); // Apple
console.log(second); // Orange
console.log(rest); // [Grapefruit, Kiwi]

// Works with objects, too
var fruits = {
    apple: ['green', 'red'],
    grapefruit: 'yellow'
};

var {appleColors: apple, grapefruitColors: grapefruit} = fruits;

console.log(appleColors); // [green, red]
console.log(grapefruitColors); // yellow

// With array
var {apple: [firstAppleColor, secondAppleColor]} = fruit;

// Woth defaults
var [a, b = 1] = fruit;