import envBlending from "./index";

test("should be a string", () => {
  expect(typeof envBlending()).toBe("string");
});

test("should be additive, subtractive or opaque", () => {
  expect(["additive", "subtractive", "opaque"].includes(envBlending())).toBeTruthy();
});

test("should be additive, opaque, or unknown", () => {
  expect(["additive", "subtractive", "opaque", "unknown"].includes(envBlending())).toBeTruthy();
});
