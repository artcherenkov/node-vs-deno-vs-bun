const { promisify } = require("./utils");

const fibonacciExp = require("./fibonacci");
const arraysExp = require("./arrays");
const asyncTasksExp = require("./async");

(async function run() {
  await promisify(arraysExp);
  console.log("--------------------------");
  await promisify(fibonacciExp);
  console.log("--------------------------");
  await asyncTasksExp();
})();
