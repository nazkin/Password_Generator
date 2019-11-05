//Create data structures for each of the user selection eg(lower-case letters, numericals etc)

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*?";

var passwordlength = 20; // User defined length
var passwordStr = ""; // The string that will contain the total of all characters used to generate password

var generatedPassword = ""; //The string password that will be automatically generated

//Boolean variables that will be corresponding to the radio selections in the html
var wantUpper = true; 
var wantLower = true;
var wantNumber = true;
var wantSpecial = false;

//Conditional control of radio selections to control the content of generated password 
if(wantUpper == true){
  passwordStr = passwordStr.concat(upperCase);
}

if(wantLower == true){
    passwordStr = passwordStr.concat(lowerCase);
}

if(wantNumber == true){
    passwordStr = passwordStr.concat(numbers);
}

if(wantSpecial == true){
    passwordStr = passwordStr.concat(specialCharacters);
}

console.log("Your sample is " + passwordStr);

//Create a random function that selects a random character from the final array 
for(var x = 0; x < passwordlength; x++) {
    generatedPassword += passwordStr.charAt(Math.floor(Math.random() * passwordStr.length)); 
}
console.log("Your password is " + generatedPassword);


//Find a way to munipulate the DOM to read input from the form elements and output my password