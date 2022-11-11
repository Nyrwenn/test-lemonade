import { calculate } from "../Services/calculate";

test("test1", () => {
  expect(calculate(12, 14, 13, 15)).toStrictEqual([13, 14]);
});

test("test2", () => {
  expect(calculate(13, 15, 16, 18)).toStrictEqual([0, 0]);
});

test("test3", () => {
  expect(calculate(14, 16, 11, 13)).toStrictEqual([0, 0]);
});

test("test4", () => {
  expect(calculate(11, 15, 12, 14)).toStrictEqual([12, 14]);
});
