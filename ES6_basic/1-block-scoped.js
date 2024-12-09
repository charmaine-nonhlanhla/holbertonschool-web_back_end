export default function taskBlock(trueOrFalse) {
  let task = false;  // Change var to let
  let task2 = true;   // Change var to let

  if (trueOrFalse) {
    let task = true;  // Declare a new task variable scoped inside the block
    let task2 = false; // Declare a new task2 variable scoped inside the block
  }

  return [task, task2];
}
