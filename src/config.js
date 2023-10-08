const currentRuntime = process.env.CURRENT_RUNTIME || "unknown";
const iterationsCount = process.env.EXP_ITERATIONS || 10;

const arraySize = process.env.ARRAY_SIZE || 100000;
const fibCount = process.env.FIB_COUNT || 30;
const asyncTasksCount = process.env.ASYNC_TASKS_COUNT || 1000;

module.exports = {
  currentRuntime,
  arraySize,
  fibCount,
  iterationsCount,
  asyncTasksCount,
};
