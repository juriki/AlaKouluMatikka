import { useState } from "react";

export default function useTaskGenerator(difficulty) {
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [randomOperator, setRandomOperator] = useState(1);

  const generateRandomNumber = () => {
    let availableOperators = [1];
    let maxNumber = 10;

    if (difficulty === 1) {
      availableOperators = [1, 2];
      maxNumber = 10;
    } else if (difficulty === 2) {
      availableOperators = [1, 2, 3];
      maxNumber = 20;
    } else if (difficulty === 3) {
      availableOperators = [1, 2, 3, 4];
      maxNumber = 50;
    }

    const rOperator = availableOperators[Math.floor(Math.random() * availableOperators.length)];
    let number1 = Math.floor(Math.random() * maxNumber) + 1;
    let number2 = Math.floor(Math.random() * maxNumber) + 1;

    if (rOperator === 2) {
      setOperator("-");
      if (number1 < number2) [number1, number2] = [number2, number1];
    } else if (rOperator === 3) {
      setOperator("x");
    } else if (rOperator === 4) {
      setOperator(":");
      if (number2 === 0) number2 = 1;
      number1 = number1 * number2;
    } else {
      setOperator("+");
    }

    setRandomNumber1(number1);
    setRandomNumber2(number2);
    setRandomOperator(rOperator);
  };

  return {
    randomNumber1,
    randomNumber2,
    operator,
    randomOperator,
    generateRandomNumber,
  };
}
