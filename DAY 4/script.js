/*
NOTES

Here's a breakdown of the code and its behavior:

### Code Explanation
1. **`"use strict"`**: 
   - This directive enables strict mode, which helps in catching potential errors early by enforcing stricter parsing and error handling rules.

2. **Primitive Data Types**:
   - The examples provided (`number`, `string`, `boolean`, `null`, `undefined`) cover the basic JavaScript data types.

3. **Code Snippet**:
   ```javascript
   let name = "Anurag";   // string
   let age = 18;          // number
   let isloggedIn = false; // boolean
   let state = null;       // null (intentionally empty value)
   ```

4. **Type Checking**:
   - `console.log(typeof undefined);` prints `undefined` because the `typeof` operator returns the type of a variable or value, and `undefined` is its own type.
   - `console.log(typeof null);` prints `object`, which is a known quirk in JavaScript. This behavior is due to a bug in the early implementation of JavaScript and has been retained for backward compatibility.

### Notes on `typeof null`
- **Reason**: The `typeof null` returning `"object"` is a result of how JavaScript's types were implemented. Null was represented with the value `0` in the underlying system, which also represents an object.
- **Implications**: This can cause confusion when checking for `null`. A more accurate check for `null` is using:
  ```javascript
  if (value === null) {
      console.log("The value is null");
  }
  ```

Would you like an explanation or exploration of any other JavaScript concept?

*/


"use strict" //treat all JS Code as newer version

// alert(3+3); //we are using node js, not browser

let name = "Anurag"
let age = 18
let isloggedIn = false
let state = null

//Primitive data types
//number => 2 to the power 33 has it range
//BigInt
//string
//Boolean
//null => standalone value
//undefined => value not assign
//Symbol 

console.log(typeof undefined); //undefined
console.log(typeof null);  //Object