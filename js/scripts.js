// * BUSINESS LOGIC
function beepboop(userInput) {
  function getNumber(userInput) {
    var nums = [];
    // debugger;
    for (var i = 0; i <= userInput ; i++) {
      nums.push(" " + i);
      console.log(nums);
    }
    return nums;
  };

  var nums = getNumber(userInput);
    debugger;
  var transformNums = nums.map(function(num) {
    if (num.includes("3")) {
      num = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (num.includes("2")) {
      num = "Boop!";
    } else if (num.includes("1")) {
      num = "Beep!";
    } else {
    }
    return num;
  });
};





// * UI LOGIC
$(document).ready(function(){
  $("form#beepboop").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    // var nums = getNumber(userInput);
    // var output = beepboop(nums);
    var output = beepboop(userInput);

    $(".result").text(output);
  });

  $("button#redo").click(function(){
    $("input#userInput").val("");
    $(".result").text("");
  });
});
