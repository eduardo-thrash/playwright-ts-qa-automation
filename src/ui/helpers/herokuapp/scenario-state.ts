import { type Page } from '@playwright/test';

const scenarioState = new WeakMap<Page, Map<string, unknown>>();

function requirePageState(page: Page): Map<string, unknown> {
  const existingState = scenarioState.get(page);
  if (existingState) return existingState;
  const newState = new Map<string, unknown>();
  scenarioState.set(page, newState);
  return newState;
}

export function setScenarioValue<T>(page: Page, key: string, value: T): void {
  requirePageState(page).set(key, value);
}

export function getScenarioValue<T>(page: Page, key: string): T | undefined {
  return requirePageState(page).get(key) as T | undefined;
}

export function requireScenarioValue<T>(page: Page, key: string): T {
  const value = getScenarioValue<T>(page, key);
  if (value === undefined) throw new Error(`Missing scenario value: ${key}`);
  return value;
}
