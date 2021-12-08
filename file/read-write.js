// const fs = require("fs"); // подключен только с cb
const fs = require("fs/promises");
const fileName = "../base/main.cjs";

// ;(async (fileName) => {
//   const file = await fs.readFile(fileName, "utf8");

//   await fs.mkdir("./temp", { recursive: true });

//   await fs.writeFile("./temp/temp.js", `${file}console.log('Hello World!')`);
// })(fileName);

//промисами

// movedFile(fileName).then(()=>console.log('Done'))

const movedFile = async (fileName) => {
  const file = await fs.readFile(fileName, "utf8");
  console.log(file);
  // await fs.mkdir("./temp") // создание параметра
  await fs.mkdir("./temp", { recursive: true }); // внесение изменения в параметр

  await fs.writeFile("./temp/temp.js", `${file}console.log('Hello World! :)')`);
};
movedFile(fileName);
