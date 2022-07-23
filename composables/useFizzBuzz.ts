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

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("FizzBuzz", () => {
    it("Multiple of 3", () => {
      expect(useFizzBuzz(3)).toBe("Fizz");
    });

    it("Multiple of 5", () => {
      expect(useFizzBuzz(5)).toBe("Buzz");
    });

    it("Multiple of 15", () => {
      expect(useFizzBuzz(15)).toBe("FizzBuzz");
    });

    it("other number", () => {
      expect(useFizzBuzz(1)).toBe("1");
    });

    it("other type", () => {
      expect(useFizzBuzz(null)).toBe("number type only");
    });
  });
}
