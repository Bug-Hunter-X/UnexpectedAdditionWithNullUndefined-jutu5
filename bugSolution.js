function foo(a, b) {
  // Check for null or undefined and handle accordingly
  a = (a === null || a === undefined) ? 0 : a; 
  return a + b; 
}

console.log(foo(undefined, 5)); //5
console.log(foo(null, 5)); //5
console.log(foo(0, 5)); //5