const useForFunc = function () {
  for (let i = 0; i < 3; i++) {
    const result = prompt("enter number");
    if (result > 15 && result < 35 && result % 6 === 0) {
      return "welcome";
    }
    if (i === 2) {
      return "error";
    }
  }
};

//Return в первой функции не возвращает

const useWhileFunction = function () {
  let count = 0;
  while (true) {
    const result = prompt("enter number");
    count++;
    if (result > 15 && result < 35 && result % 6 === 0) {
      console.log("welcome");
      break;
    }
    if (count === 3) {
      console.log("error");
      break;
    }
  }
};
useForFunc();
useWhileFunction();
