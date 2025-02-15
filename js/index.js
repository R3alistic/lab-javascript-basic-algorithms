// Iteration 1: Names and Input
//
let hacker1 = "Alex";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Rian";
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
}

// Iteration 3: Loops
let upperCaseHacker = "";
for (i = 0; i < hacker1.length; i++) {
    upperCaseHacker += hacker1[i].toUpperCase() + " ";
}
console.log(upperCaseHacker);

let reverseHacker = ``;
for (k = hacker2.length - 1; k >= 0; k--) {
    reverseHacker += hacker2[k];
}
console.log(reverseHacker);

if (upperCaseHacker < reverseHacker) {
    console.log("The driver's name goes first.")
}
else if (upperCaseHacker > reverseHacker) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}