import { logger } from "./utils.js";
import { fibCount, iterationsCount } from "./config.js";

const EXP_NAME = `числа Фибоначчи ${fibCount}`;

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export default function fibonacciExp(res) {
  let totalTime = 0;

  for (let i = 0; i < iterationsCount; i++) {
    const start = Date.now();
    fibonacci(fibCount);
    const end = Date.now();

    const time = end - start;
    logger(EXP_NAME, `Попытка ${i + 1}: ${time} мс.`);
    totalTime += time;
  }

  logger(
    EXP_NAME,
    `Среднее время выполнения: ${(totalTime / iterationsCount).toFixed(2)} мс.`
  );

  res();
}
