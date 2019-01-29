// ******** BUSINESS LOGIC ************

// *GETS NUMBER, BREAKS INTO COMPONENT NUMBERS
function beepboop(userInput, name) {
  var nums = [];
  // debugger;
  for (var i = 0; i <= userInput ; i++) {
    num = i.toString();
    if (num.includes("3")) {
      num = " I'm sorry, " + name + ". I'm afraid I can't do that.";
      nums.push(num);
    } else if (num.includes("2")) {
      num = " Boop!";
      nums.push(num);
    } else if (num.includes("1")) {
      num = " Beep!";
      nums.push(num);
    } else {
      nums.push(" " + i);
    }
  }
  return nums;
};

// * ATTEMPT TO REPLACE 'DAVE' WITH USER NAME -- NEEDS WORK
function replaceName(userName) {
  // var name;
  if (userName !== "") {
    return userName;
  } else {
    return "Dave";
  }
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
    $(".result").text("");
  });
});
