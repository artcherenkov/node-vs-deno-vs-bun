const { logger, generateArrayWithNestedObjects } = require("./utils");
const { arraySize, iterationsCount } = require("./config");

const EXP_NAME = "работа с массивами " + `${arraySize / 1000}k`;

function arraysExp(res) {
  let totalTime = 0;

  for (let i = 0; i < iterationsCount; i++) {
    const array = generateArrayWithNestedObjects();
    const start = Date.now();
    array
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((val) => val.name.startsWith("A"))
      .reduce((acc, curr) => {
        acc = { ...acc, [curr.name]: { ...curr } };
        return acc;
      }, {});
    const end = Date.now();

    const time = end - start;
    logger(EXP_NAME, `Попытка ${i + 1}: ${time} мс.`);
    totalTime += end - start;
  }

  logger(
    EXP_NAME,
    `Среднее время выполнения: ${(totalTime / iterationsCount).toFixed(2)} мс.`
  );

  res();
}

module.exports = arraysExp;
