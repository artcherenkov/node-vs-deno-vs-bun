import { promisify } from "./src/utils.js";

import fibonacciExp from "./src/fibonacci.js";
import arraysExp from "./src/arrays.js";
import asyncTasksExp from "./src/async.js";

(async function run() {
  await promisify(arraysExp);
  console.log("--------------------------");
  await promisify(fibonacciExp);
  console.log("--------------------------");
  await asyncTasksExp();
})();
