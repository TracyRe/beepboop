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

// * REPLACE 'DAVE' WITH USER NAME
function replaceName(userName) {
  // var name;
  if (userName !== "") {
    return userName;
  } else {
    return "Dave";
  }
};

// *TRANSFORMS NUMBERS: 1 = BEEP, 2 = BOOP, 3 = I'M SORRY DAVE
function beepboop(userInput, name) {
  var nums = getNumber(userInput);
  // console.log(userName);
  // debugger;
  var transformNums = nums.map(function(num) {
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

    var name = replaceName(userName);
    var output = beepboop(userInput, name);
    console.log(output);
    $("p.result").text(output);
  });

  $("button#redo").click(function(){
    $("input#userInput").val("");
    $("input#userName").val("");
    $(".result").text("");
  });
});
