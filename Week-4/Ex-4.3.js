const fib = (n) => ({
  // When you use the () after your => it just automatically returns the values inside.
  [Symbol.iterator]: () => {
    let i = 1;
    let old = 0,
      next = 0;
    return {
      next: () => {
        if (i++ <= n) {
          [old, next] = [next, old + next || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

for (let num of fib(10)) {
  console.log(num);
}
