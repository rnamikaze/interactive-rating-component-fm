let rattingInput = document.getElementsByName("ratting-input");
let selectedValue = 0;
let rattingDisplay = document.getElementById("ratting-display");
let thankYou = document.getElementById("thank-you");
let submitButton = document.getElementById("submit");

function getRattingValue() {
  let rlength = rattingInput.length;

  for (let i = 0; i < rlength; i++) {
    rattingInput[i].onclick = function () {
      selectedValue = rattingInput[i].value;
      //console.log(selectedValue);
    };
  }
}

function showResult() {
  submitButton.onclick = function () {
    if (selectedValue == 0) {
      alert("Choose between 1 to 5");
    } else {
      rattingDisplay.innerText = selectedValue;
      thankYou.classList.add("is-active");
    }
  };
}

rattingDisplay.innerText = selectedValue;
getRattingValue();
showResult();
