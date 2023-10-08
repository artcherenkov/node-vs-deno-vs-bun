export const currentRuntime = Deno.env.get("CURRENT_RUNTIME") || "unknown";
export const iterationsCount = Deno.env.get("EXP_ITERATIONS") || 10;

export const arraySize = Deno.env.get("ARRAY_SIZE") || 100000;
export const fibCount = Deno.env.get("FIB_COUNT") || 30;
export const asyncTasksCount = Deno.env.get("ASYNC_TASKS_COUNT") || 1000;
