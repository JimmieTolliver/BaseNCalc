/*
 This is the JavaScript that does the calculations based on the values and base number.
 It also does RegEx error checking to make sure the inputs are in the correct base.
 The script also sumulates sending a contact form with message but there's current no backend.
 Filename: script.js
 Author: Jimmie Tolliver
 Date: 12/10/2019
 */

function doMath() {
  var firstNum = document.getElementById("firstNum").value;
  var secondNum = document.getElementById("secondNum").value;
  var baseElement = document.getElementsByName("base");
  var operatorElement = document.getElementsByName("operator");

  for (var i = 0; i < baseElement.length; i++) {
    if (baseElement[i].checked === true) {
      var base = baseElement[i].value;
      break;
    }
  }

  for (var i = 0; i < operatorElement.length; i++) {
    if (operatorElement[i].checked === true) {
      var operator = operatorElement[i].value;
      break;
    }
  }

  switch (base) {
    case "2":
      var re1 = new RegExp(/[01]+/g);
      var re2 = new RegExp(/[01]+/g);
      if (!re1.test(firstNum) || !re2.test(secondNum)) {
        // console.log(!re1.test(firstNum));
        // console.log(!re2.test(secondNum));
        // console.log(secondNum);
        alert("Values can only be 0 or 1.  Try again!");
      }
      break;

    case "8":
      var re1 = new RegExp(/[0-7]+/g);
      var re2 = new RegExp(/[0-7]+/g);
      if (!re1.test(firstNum) || !re2.test(secondNum)) {
        alert("Values can only be between 0 and 7.  Try again!");
      }
      break;

    case "10":
      var re1 = new RegExp(/[0-9]+/g);
      var re2 = new RegExp(/[0-9]+/g);
      if (!re1.test(firstNum) || !re2.test(secondNum)) {
        alert("Values can only be between 0 and 9.  Try again!");
      }
      break;
    default:
      var re1 = new RegExp(/[0-9A-Fa-f]+/g);
      var re2 = new RegExp(/[0-9A-Fa-f]+/g);
      if (!re1.test(firstNum) || !re2.test(secondNum)) {
        alert("Values can only be 0-9 and A-F.  Try again!");
      }
  }


  firstNum = parseInt(firstNum, base);
  secondNum = parseInt(secondNum, base);

  switch (operator) {
    case "add":
      var decimalResult = firstNum + secondNum;
      break;

    case "subtract":
      var decimalResult = firstNum - secondNum;
      break;

    case "multiply":
      var decimalResult = firstNum * secondNum;
      break;
    default:
      var decimalResult = firstNum / secondNum;
  }

  var result = decimalResult.toString(base).toUpperCase();

  alert("The result is:  " + result);
}

function sendMessage() {
  var name = document.getElementById("name").value;
  alert("Thank you " + name + "! Your message has been sent!")
}