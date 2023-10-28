import { sum } from "./sum";

test("sum unit test", () => {
  const actual = sum(1, 2);
  expect(actual).toBe(3);
});