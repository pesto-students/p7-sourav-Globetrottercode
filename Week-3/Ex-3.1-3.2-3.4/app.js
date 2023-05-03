const express = require("express");
const app = express();

console.log("Hello world");
app.get("/", (req, res) => {
  res.send("Hey there !");
});

/////Exercise 3.1/////////////////////////

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    console.log(cache);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function add(a, b = 0) {
  return a + b;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 100));

console.log("hello");

//////////////Exercise 3.2///////////////

// Bind Method Example ///////////////////////////////

function forThisExample() {
  console.log(this.firstName);
  return this.firstName;
}

const bindMethod = forThisExample.bind({ firstName: "Souvik" });

bindMethod();

// Call Method ////////////////////////////////

function forCallExample(a, b) {
  console.log(`${a * b} ${this.schoolName}`);
  return this.schoolName;
}

forCallExample.call({ schoolName: "Don Bosco School, Siliguri" }, 4, 5);

/// Apply Example ////////////////////////////////

function forApplyExample(...args) {
  console.log(`${Math.max(...args)} ${this.houseName}`);
  return this.houseName;
}

forApplyExample.apply({ houseName: "Orchard 126" }, [64, 89, 45, 39]);

//Exercise 3.4//////////////////////////

function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined

app.listen(3000, function () {
  console.log("Server connected");
});
