const buttons = document.querySelectorAll(".number");
const eqsigns = document.querySelector(".eqsigns");
const display = document.querySelector(".display");

buttons.forEach(function (button) {
  button.addEventListener("click", (calculate) => {
    const buttonValue = calculate.target.value;

    if (buttonValue === "=") {
      if (display.value !== "") {
        display.value = eval(display.value);
      } else if (buttonValue === "C") {
        display.value = "";
      }
    } else {
      display.value += buttonValue;
    }
  });
});
