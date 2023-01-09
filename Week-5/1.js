//Exercise 5.1

async function toDoTask1() {
  return 10;
}

function toDoTask2() {
  return 10 * 3;
}

function toDoTask3() {
  return 10 * 5;
}

function* isAGenarator() {
  console.log("Task 1");
  yield toDoTask1();
  console.log("Task 2");
  yield toDoTask2();
  console.log("Task 3");
  yield toDoTask3();
  console.log("All Tasks are complete");
  return;
}

iter = isAGenarator();
console.log("Tasks by Generator");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

async function isAsync() {
  const a = `The value for Task 1 is ${await toDoTask1()} `;
  const b = `The value for Task 2 is ${await toDoTask2()} `;
  const c = `The value for Task 3 is ${await toDoTask3()} `;

  return { a, b, c };
}

console.log("Tasks by Async/Await");
isAsync()
  .then((obj) => {
    console.log(obj);
  })
  .catch((err) => {
    throw new Error(err);
  })
  .finally(() => {
    console.log("All the tasks are complete");
  });
