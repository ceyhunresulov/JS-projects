const buttons = document.querySelectorAll("button");
const calcBox = document.getElementById("calc");
const firstValue = "";
const secondValue = "";
const currentValue = "";
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("operator")) {
      console.log("operator");
    } else if (element.classList.contains("number")) {
      console.log("number");
    } else {
      console.log("other");
    }
  })
);
