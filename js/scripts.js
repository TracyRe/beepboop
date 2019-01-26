// ******** BUSINESS LOGIC ************

// *GETS NUMBER, BREAKS INTO COMPONENT NUMBERS
function getNumber(userInput) {
  var nums = [];
  // debugger;
  for (var i = 0; i <= userInput ; i++) {
    nums.push(" " + i);
    console.log(nums);
  }
  return nums;
};

// * ATTEMPT TO REPLACE 'DAVE' WITH USER NAME -- NEEDS WORK
// function replaceName(userName) {
//   // var name;
//   if (userName !== "") {
//     return name = userName;
//   } else {
//     return name = "Dave";
//   }
// };

// *TRANSFORMS NUMBERS: 1 = BEEP, 2 = BOOP, 3 = I'M SORRY DAVE
function beepboop(userInput) {
  var nums = getNumber(userInput);
  // console.log(userName);
  // debugger;
  var transformNums = nums.map(function(num) {
    name = "Dave"
    if (num.includes("3")) {
      num = " I'm sorry, " + name + ". I'm afraid I can't do that.";
    } else if (num.includes("2")) {
      num = " Boop!";
    } else if (num.includes("1")) {
      num = " Beep!";
    } else {
    }
    console.log(num);
    return num;
  });
  return transformNums;
};

// ********* UI LOGIC ************
$(document).ready(function() {
  $("form#beepboop").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var userName = $("#userName").val();
    console.log(userName);

    var output = beepboop(userInput);
    console.log(output);
    $("p.result").text(output);
  });

  $("button#redo").click(function(){
    $("input#userInput").val("");
    $(".result").text("");
  });
});
