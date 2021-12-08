const os = require("os");

// console.log(os.cpus().length);

const path = require("path");

// console.log(path.resolve("/foo/bar", "./baz")); //пути соединены
// //C:\foo\bar\baz
// console.log(path.resolve("/foo/bar", "/tmp/file")); //абсолютный путь заменяет абсолютным
// //C:\tmp\file
// console.log(path.sep); //разделитель переменная '/'

// console.log(path.resolve("wwroot", "static_files/png/", "../gif/image.gif")); //для обычного соединения
// //C:\Users\user\Desktop\Homeworck\react\start-node\wwroot\static_files\gif\image.gif

// console.log(__filename); //где нах-ся файл
// console.log(__dirname); //в какой папке нах-ся файл

// console.log(path.join("/foo", "bar", "baz/asdf", "quux"));//\foo\bar\baz\asdf\quux
// console.log(path.join(__dirname, "main.cjs"));//C:\Users\user\Desktop\Homeworck\react\start-node\base\main.cjs

//C:\Users\user\Desktop\Homeworck\react\start-node\base
// \foo\bar\baz\asdf\quiz
// C:\Users\user\Desktop\Homeworck\react\start-node\base\main.cjs
console.log(process.pid); //присваивает уникальный номер
// // C:\Users\user\Desktop\Homeworck\react\start-node\base\main.cjs
// // 3236

console.log(process.cwd()); //показывает где мы запускаемся и где выполняемся

process.on("exit", (code) => {
  console.log("Code: ${code}");
});
process.exit(1001);
process.exit(); // если в программе ошибка выход из процесса, на него можно повесит событие
