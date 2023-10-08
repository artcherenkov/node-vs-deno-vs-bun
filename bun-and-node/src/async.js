import { asyncTasksCount, iterationsCount } from "./config.js";
import { logger } from "./utils.js";

let totalTime = 0;

const EXP_NAME = `асинхронные задачи ${asyncTasksCount / 1000}к`;

// Функция, моделирующая асинхронную задачу
function asyncTask() {
  return new Promise((resolve) => setTimeout(resolve, 50));
}

export default async function asyncTasksExp() {
  for (let i = 0; i < iterationsCount; i++) {
    const promises = [];
    // Создание массива из 1000 промисов
    for (let i = 0; i < asyncTasksCount; i++) {
      promises.push(asyncTask());
    }
    const start = Date.now();
    await Promise.all(promises);
    const end = Date.now();

    const time = end - start;
    logger(EXP_NAME, `Попытка ${i + 1}: ${time} мс.`);
    totalTime += time;
  }

  logger(
    EXP_NAME,
    `Среднее время выполнения: ${(totalTime / iterationsCount).toFixed(2)} мс.`
  );
}
