// -------- NAMES AND INPUT -------- //


let hacker1 = "Paulo";
console.log(`The driver's name is ${hacker1}`);


let hacker2 = "Rodrigo";
console.log(`The navigator's name is ${hacker2}`);


// -------- CONDITIONALS -------- //


console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)


// -------- LOOPS -------- //


//3.1//
let space = ""

for (i = 0; i < hacker1.length; i++){
  if (i === hacker1.length - 1){
    space += hacker1[i]
  } else {
    space += hacker1[i] + " "
  }  
}

console.log(space.toUpperCase());


//3.2//
let reversename = ""

for (let j = hacker2.length - 1; j >= 0; j--){
  reversename += hacker2[j]
}

console.log(reversename);

//3.3//
if (hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// -------- BONUS 1 --------//

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque laoreet mi non blandit.
Donec nec ante ac libero pretium auctor id a erat. Aliquam mollis venenatis urna at consectetur. Morbi aliquam nibh sollicitudin, vulputate odio non, semper metus. Morbi pellentesque consequat mi nec volutpat. Etiam id neque finibus, rutrum orci at, fringilla ante. Etiam a hendrerit ante.
Interdum et malesuada fames ac ante ipsum primis faucibus. In cursus dapibus condimentum. Integer at auctor velit. Quisque nec dapibus orci. Phasellus pellentesque ipsum. Vivamus vitae lacus felis. Nulla eget velit ex. Nunc egestas nisl nisi, non luctus velit consequat nec.`

//a //

function WordCount(text) { 
  return text.split(" ").length;
}
console.log(WordCount(text));

// b - ??? - //

count = 0
for (k = 0; k < text.length; k++){
  if (text.includes(" "+"et"+" ")){
    count += 1
  }
}

// -------- BONUS 2 -------- //

