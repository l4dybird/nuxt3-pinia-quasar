import type { RouteLocationRaw } from "vue-router";
import { mockNuxtImport } from "nuxt-vitest/utils";

const onHoge = (hoge?: string) => {
  if (!hoge) {
    throw new Error("Error");
  }
  return hoge;
};

const onFuga = async (hoge?: RouteLocationRaw) => {
  if (!hoge) {
    throw await useRouter()?.push({ name: "index-app" });
  }
  return hoge;
};

describe("Sample", () => {
  it.fails("Promise Error Test", () => {
    expect(onHoge()).toThrowError("Error");
  });

  it.fails("Router Push", async () => {
    // mockNuxtImport("useRouter", () => {
    //   return () => {
    //     return { push: () => "mock" };
    //   };
    // });

    expect(async () => await onFuga()).toEqual({
      name: "index-app",
      params: {},
    });
  });

  it("Router Push", async () => {
    expect(await onFuga("aiueo")).toBe("aiueo");
  });

  // it("Multiple of 5", () => {
  //   expect(useFizzBuzz(5)).toBe("Buzz");
  // });

  // it("Multiple of 15", () => {
  //   expect(useFizzBuzz(15)).toBe("FizzBuzz");
  // });

  // it("other number", () => {
  //   expect(useFizzBuzz(1)).toBe("1");
  // });

  // it("other type", () => {
  //   expect(useFizzBuzz(null)).toBe("number type only");
  // });
});
