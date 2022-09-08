// const buttons = document.querySelectorAll("button");
// const calcBox = document.getElementById("calc");
// const history = document.querySelector(".history");
// let firstNum = null;
// let secondNum = null;
// let operator = null;
// buttons.forEach((button) =>
//   button.addEventListener("click", (e) => {
//     let button = e.target;
//     if (button.classList.contains("clear")) {
//       clearCalcBox();
//     } else if (button.classList.contains("number")) {
//       addNumber(button);
//     } else if (button.classList.contains("operator")) {
//       addOperator(button);
//     } else if (button.classList.contains("equal")) {
//       getResult();
//     }
//   })
// );

// const clearCalcBox = () => {
//   calcBox.value = null;
//   history.innerText = "history";
//   firstNum = null;
//   secondNum = null;
// };

// const addNumber = (button) => {
//   calcBox.value += button.innerText;
// };

// const addOperator = (button) => {
//   if (firstNum === null) {
//     firstNum = parseFloat(calcBox.value);
//     calcBox.value = "";
//     operator = button.innerText;
//     history.innerText = firstNum + button.innerText;
//   } else {
//     secondNum = parseFloat(calcBox.value);
//     calcBox.value = "";
//     operator = button.innerText;
//   }
// };

// const getResult = () => {
//   switch (operator) {
//     case "+":
//       secondNum = parseFloat(calcBox.value);
//       calcBox.value = firstNum + secondNum;
//       history.innerText += secondNum;
//       firstNum = null;
//       secondNum = null;
//       return;
//     case "-":
//       secondNum = parseFloat(calcBox.value);
//       calcBox.value = firstNum - secondNum;
//       history.innerText += secondNum;
//       firstNum = null;
//       secondNum = null;
//       return;
//     case "x":
//       secondNum = parseFloat(calcBox.value);
//       calcBox.value = firstNum * secondNum;
//       history.innerText += secondNum;
//       firstNum = null;
//       secondNum = null;
//       return;
//     case "/":
//       secondNum = parseFloat(calcBox.value);
//       calcBox.value = firstNum / secondNum;
//       history.innerText += secondNum;
//       console.log(8 / 2);
//       firstNum = null;
//       secondNum = null;
//       return;
//   }
// };

const buttons = document.querySelectorAll("button");
const calcBox = document.getElementById("calc");
const history = document.querySelector(".history");
let firstNum = null;
let secondNum = null;
let operator = null;
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let button = e.target;
    if (button.classList.contains("clear")) {
      clearCalcBox();
    } else if (button.classList.contains("number")) {
      addNumber(button);
    } else if (button.classList.contains("operator")) {
      addOperator(button);
    } else if (button.classList.contains("equal")) {
      getResult();
    }
  })
);

const clearCalcBox = () => {
  calcBox.value = null;
  history.innerText = "history";
  firstNum = null;
  secondNum = null;
};

const addNumber = (button) => {
  calcBox.value += button.innerText;
};

const addOperator = (button) => {
  if (firstNum === null) {
    firstNum = parseFloat(calcBox.value);
    calcBox.value = "";
    operator = button.innerText;
    history.innerText = firstNum + button.innerText;
  } else {
    secondNum = parseFloat(calcBox.value);
    calcBox.value = "";
    operator = button.innerText;
  }
};

const getResult = () => {
  let newList = "";
  let numberList;
  let operatorList = [];
  history.innerText = calcBox.value + "=";
  let valueList = calcBox.value.split("");
  valueList.forEach((e) => {
    if (e === "+" || e === "-" || e == "*" || e === "/") {
      valueList[valueList.indexOf(e)] = "+";
      operatorList.push(e);
    }
  });
  valueList.forEach((e) => {
    newList += e;
  });
  numberList = newList.split("+");
  console.log(numberList);
  console.log(operatorList);
  computeResult(numberList, operatorList);
};
// 7+9-3*2/5
// [7,9,3,2,5] => [7,16,3,2,5]=>[7,16,13,2,5]=>[7,16,13,26,5]
// [+,-,*,/]
// i=0
// i=1
// i=2
// i=3
const computeResult = (numberList, operatorList) => {
  console.log("salam");
  let result;
  for (let i = 0; i < operatorList.length; i++) {
    if (operatorList[i] === "+") {
      result = parseFloat(numberList[i]) + parseFloat(numberList[i + 1]);
      numberList[i + 1] = result;
    } else if (operatorList[i] === "-") {
      result = parseFloat(numberList[i]) - parseFloat(numberList[i + 1]);
      numberList[i + 1] = result;
    } else if (operatorList[i] === "*") {
      result = parseFloat(numberList[i]) * parseFloat(numberList[i + 1]);
      numberList[i + 1] = result;
    } else if (operatorList[i] === "/") {
      result = parseFloat(numberList[i]) / parseFloat(numberList[i + 1]);
      numberList[i + 1] = result;
    }
  }
  console.log(result);
  history.innerText += result;
  calcBox.value = result;
};
// const numberList = [];
// calcBox.addEventListener("keydown", (e) => {
//   if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
//     numberList.push(parseFloat(calcBox.value));
//     console.log(numberList);
//   }
// });
