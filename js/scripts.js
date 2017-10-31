// business logic
var numbers = []

function game(userInput) {
  for (var i = 1; i <= userInput; i++)
    if (x % 15 === 0) {
      numbers.push("game");

    }
  else if (x % 3 === 0) {
    numbers.push("ping");
  } else if (x % 5 === 0) {
    numbers.push("pong");
  } else {
    numbers.push(x);
  }
}

//user logic
$(document).ready(function() {
  $(#PingPong).click(function(){
    event.preventDefault();
    var userInput = parseInt($("input#user").val());

    game(userInput);

    numbers.forEach(function(userInput){
      $("#resultslist").append("<li>" + userInput + "</li>");
    })

  }
)










}
