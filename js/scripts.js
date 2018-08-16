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
  //alert(inputArray); //this is a test the fxn above works.


}
//front end
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("#inputBox").val();
    //alert(userInput); //testing to see if we save any user value
    //alert(isNotNumber(userInput));// calls the fxn isNotNumber above
    romanNumeral(userInput);
  });
});
