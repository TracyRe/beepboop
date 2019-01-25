// * BUSINESS LOGIC


function getNumber(userInput) {
  var output = [];
  // debugger;
  for (var i = 0; i <= userInput ; i++) {
    output.push(i);
    console.log(output);
  }
  return output;
};









// * UI LOGIC
$(document).ready(function(){
  $("form#beepboop").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var output = getNumber(userInput);


    $(".result").text(output);

  });

  $("button#redo").click(function(){
    $("input#userInput").val("");
    $(".result").text("");
  });
});
