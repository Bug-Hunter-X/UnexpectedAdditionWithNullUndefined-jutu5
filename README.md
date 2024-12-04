# Unexpected Addition Behavior with Null and Undefined in JavaScript

This example demonstrates unexpected behavior in JavaScript when using the addition operator (+) with `null` and `undefined` values.  JavaScript's loose typing can lead to subtle errors if not handled carefully.

## The Problem

The `+` operator in JavaScript doesn't always behave as expected when one of the operands is `null` or `undefined`.  Specifically:

* **undefined + number:** Results in `NaN` (Not a Number).
* **null + number:** Results in the number (null is coerced to 0).

This inconsistency can be a source of bugs that are difficult to track down.

## Solution

The best solution is to always explicitly check for `null` and `undefined` values before performing arithmetic operations.  Using strict equality (`===`) will prevent type coercion and make the code's behavior more predictable.

## How to use this repository

1. Clone the repository
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run the JavaScript files using Node.js or your preferred JavaScript runtime environment.