//back end

//Function checks if a string is a number. If it is a number, returns false.
function isNotNumber(string) {
  var regex = /[^0-9]/;
  return regex.test(string);
}


//Main function to call other functions
function romanNumeral(string) {
  if (isNotNumber(string)) {
    alert("Please enter a valid number");
  } else if (parseInt(string) > 3999) {
    alert("Please enter a number under 4,000");
  } else {
    stringToArray(string);
  }
}

//get user input into an array and then split for parts to evaluate.
function stringToArray(string){
  var inputArray = string.split("");
  //alert(inputArray); //this is a test the stringToArray fxn above works.
  var zeroArray = [];
  for (i = 0; i < inputArray.length; i++) {
    var zero = inputArray.length - (i + 1);
    var power = Math.pow(10, zero);
    var newInput = parseInt(inputArray[i]) * power;
    zeroArray.push(newInput);
    //alert(zeroArray);//test fxn call to each input array split parses int and applies fmla for exponential power
  }
  return zeroArray;
}

function conversion(array){
    var symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numberValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

}

//front end
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("#inputBox").val();
    //alert(userInput); //testing to see if we save any user value
    //alert(isNotNumber(userInput));// calls the fxn isNotNumber above
    var numerals = [];

    romanNumeral(userInput);

  });
});
