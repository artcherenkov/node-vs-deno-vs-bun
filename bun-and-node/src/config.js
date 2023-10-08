import { env } from "node:process";

export const currentRuntime = env.CURRENT_RUNTIME || "unknown";
export const iterationsCount = env.EXP_ITERATIONS || 10;

export const arraySize = env.ARRAY_SIZE || 100000;
export const fibCount = env.FIB_COUNT || 30;
export const asyncTasksCount = env.ASYNC_TASKS_COUNT || 1000;
