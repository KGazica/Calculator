// history

function getPast() {
  return document.getElementById("past-value").innerText;
}

function printPast(num) {
  document.getElementById("past-value").innerText = num;
}

// retrieve and display results
function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

//clear comas in output

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printPast("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var past = getPast();
      if (output == "" && past != "") {
        if (isNaN(past[past.length - 1])) {
          past = past.substr(0, past.length - 1);
        }
      }
      if (output != "" || past != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        past = past + output;
        if (this.id == "=") {
          var result = eval(past);
          printOutput(result);
          printPast("");
        } else {
          past = past + this.id;
          printPast(past);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
