var specialCharacters = [
"!",
"@",
"#",
"+",
"//",
"/",
"'",
"$",
"^",
"?",
":",
",",
"(",
")",
"{",
"}",
"[",
"]",
"~",
"-",
".",
];
var numbers = ["0", "1", "2", "3","4", "5", "6", "7","8", "9" ]
var lowercase = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
];
var upperCase = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Z",
];

function generatePassword(){
  var passwordLength = prompt("What Length of the password would you like?");
  var hasSpecialCharacters = confirm("Include Special Characters");
  var hasUpperCharacters = confirm("Include UpperCase Characters");
  var hasLowerCharacters = confirm("Include LowerCase Characters");
  var hasNumbers = confirm("Include Numbers");

  var passwordSettings ={
    passwordLength: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCharacters: hasUpperCharacters,
    hasLowerCharacters: hasLowerCharacters,
    hasNumbers: hasNumbers
  }

  var result = [];
  var requiredCharacters =[];

  function selectRandomCharacter(array){
    Math.floor(Math.random())

  }
 if(hasSpecialCharacters){
result.push(selectRandomCharacter(specialCharacters));
requiredCharacters.concat(specialCharacters);
 }
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
