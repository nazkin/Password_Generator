
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
    document.querySelector('.userLengthInput').value = "";
    document.querySelector('#largeL').checked = false;
    document.querySelector('#smallL').checked = false;
    document.querySelector('#numL').checked = false;
    document.querySelector('#specialL').checked = false;
    document.querySelector('.password-output').style.color = "black";
    document.querySelector('.password-output').textContent = "Your New Password Will Appear Here";
    passwordLength = 1;
    generatedPassword = "";
    passwordStr = "";
}

initForm();
  
function letsRun() {
//Create DOM querySelectors to capture the input from chackboxes

wantUpper = document.querySelector('#largeL').checked;
wantLower = document.querySelector('#smallL').checked;
wantNumber = document.querySelector('#numL').checked;
wantSpecial = document.querySelector('#specialL').checked;
//same as passwordLength variabl test
passwordLength = document.querySelector('.userLengthInput').value;


//Conditional control of radio selections to control the content of generated password 

 if(!wantUpper && !wantLower && !wantNumber && !wantSpecial){
    document.querySelector('.password-output').style.color = "red";
    document.querySelector('.password-output').textContent = "***MUST SELECT AT LEAST 1 CHARACTER SET***";
 }
 else if((wantUpper || wantLower || wantnumber || wantSpecial) && passwordLength === "") {
    document.querySelector('.password-output').style.color = "red";
    document.querySelector('.password-output').textContent = "***MUST ENTER DESIRED PASSWORD LENGTH***";
 }
 else {
    if(wantUpper){
        passwordStr = passwordStr.concat(upperCase);
      }
      if(wantLower){
          passwordStr = passwordStr.concat(lowerCase);
      }
      if(wantNumber){
          passwordStr = passwordStr.concat(numbers);
      }
      if(wantSpecial){
          passwordStr = passwordStr.concat(specialCharacters);
      }
      //Create a random function that  selects a random character from the final array 
      for(var x = 0; x < passwordLength; x++) {
          generatedPassword += passwordStr.charAt(Math.floor(Math.random() * passwordStr.length)); 
      }

      document.querySelector('.password-output').textContent = "" + generatedPassword;
 }

}


//The Launch Button ( to run the entire script)
var runAppButton = document.querySelector('.submit-data');

runAppButton.addEventListener("click", letsRun);

//The reset button (to run a variety of code without having to refresh the page)
var resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener("click", initForm);


