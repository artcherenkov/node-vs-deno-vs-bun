import { arraySize, currentRuntime } from "./config.js";

function getRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateNestedObject(depth = 1) {
  if (depth === 0) return {};

  const object = {
    name: getRandomString(5),
    key1: getRandomString(5),
    key2: getRandomString(5),
    key3: getRandomString(5),
    key4: getRandomString(5),
    key5: getRandomString(5),
  };

  if (Math.random() < 0.5) {
    object.child = generateNestedObject(depth - 1);
  }

  return object;
}

export function generateArrayWithNestedObjects() {
  const array = [];
  for (let i = 0; i < arraySize; i++) {
    array.push(generateNestedObject(3));
  }

  return array;
}

export const promisify = (fn) => new Promise(fn);

export const logger = (expName, log) => {
  console.log(`[${currentRuntime}]`, `[${expName}]`, log);
};
