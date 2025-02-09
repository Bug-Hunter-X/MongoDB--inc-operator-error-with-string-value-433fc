# MongoDB $inc Operator Error with String Value

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations. The error arises from attempting to increment a field by a string value instead of a numeric value.

## Bug Description
The provided code snippet showcases an incorrect usage of the `$inc` operator. Instead of specifying a numeric value for the increment, a string value is used, leading to unexpected results.

## Bug Solution
The solution involves correcting the update operation by providing a valid numeric value to the `$inc` operator. The updated code snippet uses a number (1) to successfully increment the `field` by 1.

## How to reproduce
1. Set up a MongoDB instance
2. Create a collection named `collection`
3. Insert one document with the `_id` and `field` values
4. Execute the JavaScript code provided in `bug.js` (incorrect code)
5. Execute the JavaScript code provided in `bugSolution.js` (corrected code)
