const p = new Promise((resolve, reject) => {
  const randNum = Math.floor(Math.random() * 100 + 1);
  if (randNum % 5 === 0) {
    console.log(randNum);
    reject(randNum);
  } else {
    console.log(randNum);
    resolve(randNum);
  }
});

p.then((val) => {
  console.log(`Resolved with ${val}`);
})
  .catch((val) => {
    console.log(`Rejected with ${val}`);
  })
  .finally(() => {
    console.log(`Promise finally Settled`);
  });
