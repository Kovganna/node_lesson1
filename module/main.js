// const { info, log } = require("./module");
// const { log } = require("./module");

// import("./module.mjs").then((result) => {
//   const { info } = result;
//   info("ESModule JS");
// });

// log("Common JS");

// console.log("Hello World!");

//iief - самовызывающая функция:
const { log } = require("./module");

(async () => {
  const result = await import("./module.mjs");
  const { info } = result;
  info("ESModule JS");
})();

log("Common JS");

console.log("Hello World!");
