$(document).ready(function(){
  $("#factorial").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var output = [];
    for (var i = userInput; i > 1 ; i = --userInput ) {
      output.push(i);
    }
    console.log(output);


    $(".result").text(result);

  });

  $("button#redo").click(function(){
    $("input#userInput").val("");
    $(".result").text("");
  });
});
