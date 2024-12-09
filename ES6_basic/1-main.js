import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));  // Should return [true, false]
console.log(taskBlock(false)); // Should return [false, true]
