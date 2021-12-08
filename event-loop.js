const fs = require("fs");
const { resolve } = require("path/posix");

console.log("Начало работы");

setTimeout(() => {
  console.log("setTimeout happend");
}, 0);

setImmediate(() => {
  console.log("immediate happend");
}); //надо выполнить немедленно, но будет выполнено в сл цикле node

new Promise((resolve) => {
  resolve("Prommise happend");
  process.nextTick(() => {
    console.log("nextTick before");
  });
}).then(console.log);

Promise.resolve().then(() => console.log("promise 1 happened"));
Promise.resolve().then(() => {
  console.log("promise 2 happened");
  process.nextTick(() => {
    console.log("nextTick in promise happened");
  });
});
Promise.resolve().then(() => console.log("promise 3 happened"));

process.nextTick(() => {
  console.log("nextTick 1 happened");
});
process.nextTick(() => {
  console.log("nextTick 2 happened");
});
process.nextTick(() => {
  console.log("nextTick 3 happened");
});

queueMicrotask(() => {
  //function contents here
});

new Promise((resolve) => {
  resolve("Promise happened");
  process.nextTick(() => {
    console.log("nextTick after");
  });
}).then(console.log);

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});

console.log("Конец файла");
