const useFizzBuzz = (value: number): string => {
  if (typeof value === "number") {
    if (value % 3 === 0 && value % 5 !== 0) {
      return "Fizz";
    } else if (value % 3 !== 0 && value % 5 === 0) {
      return "Buzz";
    } else if (value % 3 === 0 && value % 5 === 0) {
      return "FizzBuzz";
    } else {
      return value.toString();
    }
  } else {
    return "number type only";
  }
};

export default useFizzBuzz;
