// * BUSINESS LOGIC
function getNumber(userInput) {
  var nums = [];
  // debugger;
  for (var i = 0; i <= userInput ; i++) {
    nums.push(" " + i);
    console.log(nums);
  }
  return nums;
};

function beepboop(userInput) {
  var nums = getNumber(userInput);
  // debugger;
  var transformNums = nums.map(function(num) {
    // return getNumber(userInput);
    if (num.includes("3")) {
      num = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (num.includes("2")) {
      num = "Boop!";
    } else if (num.includes("1")) {
      num = "Beep!";
    } else {
    }
    console.log(num);

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

    $("p.result").text(output);
  });

  $("button#redo").click(function(){
    $("input#userInput").val("");
    $(".result").text("");
  });
});
