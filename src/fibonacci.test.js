import { fibs, fibsRec } from "./fibonacci.js";

test("fibonacci iterative test returns correct array of numbers", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("fibonacci recursive test returns correct array of numbers", () => {
  expect(fibsRec(0)).toEqual([0]);
});

test("fibonacci recursive test returns correct array of numbers", () => {
  expect(fibsRec(1)).toEqual([0, 1]);
});

test("fibonacci recursive test returns correct array of numbers", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});