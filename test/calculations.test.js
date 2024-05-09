/** @format */

import { expect, test } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  generateNumberText,
  calculateGrade,
  findAverage,
  squareDigits,
  getUserInfo,
  removeEverySecondElement,
  calculateDiscount,
  gradeCalculator,
  calculateAverageGrade,
} from './calculations';

//  add
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('add 3+(-2) to be 1', () => {
  expect(add(3, -2)).toBe(1);
});
test('add two negative numbers -2 +(-2) to be -4 ', () => {
  expect(add(-2, -2)).toBe(-4);
});

//  subtract
test('subtracts 3 + 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});


test('subtracts 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

//divide
test('divides 6 * 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

//isEven
test('should return true for even numbers', () => {
  expect(isEven(2)).toBe(true);
});
test('should return false for  not even numbers', () => {
  expect(isEven(1)).toBe(false);
});

//generateNumberText
test('should return "one" for  a= 1', () => {
  expect(generateNumberText(1)).toBe('one');
});

test('should return "two" for a= 2', () => {
  expect(generateNumberText(2)).toBe('two');
});

test('should return "three" for a= 3', () => {
  expect(generateNumberText(3)).toBe('three');
});

test('should return "unknown" for a= unknown', () => {
  expect(generateNumberText(4)).toBe('unknown');
});

//calculateGrade // boundary analyses: 
test('should return "A" for score >= 90', () => {
  expect(calculateGrade(90)).toBe('A');
});
test('should return "B" for score >= 80', () => {
  expect(calculateGrade(80)).toBe('B');
});
test('should return "C" for score >= 70', () => {
  expect(calculateGrade(70)).toBe('C');
});
test('should return "D" for score >= 60', () => {
  expect(calculateGrade(60)).toBe('D');
});
test('should return "F" for score > 60', () => {
  expect(calculateGrade(56)).toBe('F');
});

//findAverage
test('Return average for single array ', () => {
  const numbers = [[1, 2, 3, 4, 5]];
  expect(findAverage(numbers)).toBe(3);
});
test(' Return average for multiple arrays', () => {
  const numbers = [
    [1, 2, 3, 4, 5],
    [3, 4, 5],
    [6, 6, 7, 8],
  ];
  expect(findAverage(numbers)).toBe(3.6);
});
test('Average for empty array is 0', () => {
  const numbers = [];
  expect(findAverage(numbers)).toBe(0);
});
test('Average for empty subarrays is 0', () => {
  const numbers = [[], []];
  expect(findAverage(numbers)).toBe(0);
});
test('Average for negative numbers', () => {
  const numbers = [
    [-1, -2, -3],
    [-4, -5, -6],
    [-7, -8, -9],
  ];
  expect(findAverage(numbers)).toBe(-5);
});

// squareDigits

test('should square each digit of a positive number', () => {
  const num = [1, 2, 3];
  const result = squareDigits(num);

  expect(result).toBe(149);
});



//getUserInfo function
// test case 1: empty user info : 
test('empty user info', () => {
  const user = {};
  expect(getUserInfo(user)).toEqual({
    name: 'undefined undefined',
    email: undefined,
    address: undefined,
  });
});
// test case 2: valid user info: 
test('should return user information ', () => {
  const user = {
    firstName: 'Dima',
    lastName: 'Kutaini',
    email: 'dima@gmail.com',
    address: '123 Denmark',
  };
  expect(getUserInfo(user)).toEqual({
    name: 'Dima Kutaini',
    email: 'dima@gmail.com',
    address: '123 Denmark',
  });
});
// test case 3: not complete info: 
test('should return user information with missing properties set to undefined', () => {
  const user = {
    firstName: 'tester',
    // lastName is intentionally omitted
    email: 'tester.doe@example.com',
    // address is intentionally omitted
  };
  expect(getUserInfo(user)).toEqual({
    name: 'tester undefined',
    email: 'tester.doe@example.com',
    address: undefined,
  });
});


//removeEverySecondElement
test('should remove every second element from the array', () => {
  const array = [1, 2, 3, 4, 5, 6, 7];

  expect(removeEverySecondElement(array)).toEqual([1, 3, 5, 7]);
});

test('should handle an empty array', () => {
  const array = [];
  expect(removeEverySecondElement(array)).toEqual([]);
});

test(' should return empty array  when array contain one element ', () => {
  const array = [6];
  expect(removeEverySecondElement(array)).toEqual([6]);
});
test('when array contains odd numbers with multiple types  ', () => {
  const array = ['hi', 1, 2, 'hello', 'welcome'];
  expect(removeEverySecondElement(array)).toEqual(['hi', 2, 'welcome']);
});

//calculateDiscount
// Test case 1: Valid input, expecting correct result
test('should calculate discount correctly for valid input', () => {
  const originalPrice = 100;
  const discountPercentage = 50;
  const expected = 50;
  expect(calculateDiscount(originalPrice, discountPercentage)).toBe(expected);
});

// Test case 2: Invalid original price, expecting an error
test('should throw an error for invalid original price', () => {
  const originalPrice = 'invalid';
  const discountPercentage = 20;
  expect(() =>
    calculateDiscount(originalPrice, discountPercentage)
  ).toThrowError('Invalid original price');
});
// Test case 3: Invalid discount percentage, expecting an error
test('should throw an error for invalid discount percentage', () => {
  const originalPrice = 100;
  const discountPercentage = 'invalid';
  expect(() =>
    calculateDiscount(originalPrice, discountPercentage)
  ).toThrowError('Invalid discount percentage');
});

//Test case 4: Discount percentage out of range, expecting an error
test('should throw an error for discount percentage out of range', () => {
  const originalPrice = 100;
  const discountPercentage = 110;
  expect(() =>
    calculateDiscount(originalPrice, discountPercentage)
  ).toThrowError('Invalid discount percentage');
});

//GradeCalculator

//Test case 1: Invalid student score,
test('should throw an error for invalid student score', () => {
  const studentScore = 'invalid';
  expect(() => gradeCalculator(studentScore)).toThrowError(
    'Invalid student score'
  );
});
// Test case 2: Valid input for grade 'A'
test('Return A for  studentscore >=90', () => {
  expect(gradeCalculator(93)).toBe('A');
});

// Test case 3: Valid input for grade 'B'
test('Return B for  studentscore >=80', () => {
  expect(gradeCalculator(85)).toBe('B');
});

// Test case 4: Valid input for grade 'C'
test('Return C for  studentscore >=70', () => {
  expect(gradeCalculator(75)).toBe('C');
});

// Test case 5: Valid input for grade 'D'
test('Return D for  studentscore >=60', () => {
  expect(gradeCalculator(65)).toBe('D');
});

// Test case 6: Valid input for grade 'F'
test('Return F for  studentscore < 60', () => {
  expect(gradeCalculator(45)).toBe('F');
});

// calculateAverageGrade:
//Test case 1: Invalid student scores,
test('should throw an error for invalid student score in the array', () => {
  const studentScores = [80, 'invalid', 75, 95, 85];
  expect(() => calculateAverageGrade(studentScores)).toThrowError(
    'Invalid student score'
  );
});

// test case 2: empty array
test(' should return 0 for empty array ', () => {
  const studentScores = [];
  expect(calculateAverageGrade(studentScores)).toBe('No grads available ');
});

// Test case 3: Valid input for average score
test('should calculate average score correctly for valid input', () => {
  const studentScores = [80, 90, 75, 95, 85];
  const expectedAverage = 85;
  expect(calculateAverageGrade(studentScores)).toBe(expectedAverage);
});
// Test case 4: Valid input  with negative score: 
test('should calculate average score correctly for an array with negative scores', () => {
  const studentScores = [80, -3, 75, 70, 68];
  const expected = 58; 

  expect(calculateAverageGrade(studentScores)).toBe(expected);
});
