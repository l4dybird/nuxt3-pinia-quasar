import { describe, it, expect } from "vitest";
import useFizzBuzz from "../composables/useFizzBuzz";

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
