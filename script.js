//Create data structures for each of the user selection eg(lower-case letters, numericals etc)



//DATA

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*?";

var passwordStr; // The string that will contain the total of all characters used to generate password
var generatedPassword; //The string password that will be automatically generated
var passwordLength; //length of password

var wantUpper;
var wantLower ;
var wantNumber ;
var wantSpecial ;

function initForm() {
    wantUpper = false;
    wantLower = false;
    wantNumber = false;
    wantSpecial = false;
    passwordLength = 1;
    generatedPassword = "";
    passwordStr = "";
    
}

initForm();
  

//Boolean variables that will be corresponding to the radio selections in the html

var runAppButton = document.querySelector('.submit-data');

runAppButton.addEventListener('click', letsRun());



function letsRun () {
//Create DOM querySelectors to capture the input from chackboxes

wantUpper = document.querySelector('#largeL').checked;
wantLower = document.querySelector('#smallL').checked;
wantNumber = document.querySelector('#numL').checked;
wantSpecial = document.querySelector('#specialL').checked;
//same as passwordLength variabl test
passwordLength = document.querySelector('.userLengthInput').value;


//Conditional control of radio selections to control the content of generated password 
console.log(wantUpper);
 


  

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

      if(wantSpecial === false && wantNumber === false && wantLower === false && wantUpper === false){
          console.log ("You must specify at least 1 group of characters to build a password")
      }
       
      console.log("Your sample is " +  passwordStr);
       
      //Create a random function that  selects a random character from the final array 
      for(var x = 0; x < passwordLength; x++) {
          generatedPassword += passwordStr.charAt(Math.floor(Math.random() * passwordStr.length)); 
      }
      console.log("Your password is " + generatedPassword);

      document.querySelector('p').textContent = generatedPassword;

}




