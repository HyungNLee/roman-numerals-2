//back end



//front end
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("#inputBox").val();
    alert(userInput); //testing to see if we save user value

  });
});
