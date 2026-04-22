import { STORAGE_KEY } from "./constants.js";

export function readExpenses() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeExpenses(expenses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

export function seedIfEmpty(seedExpenses) {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (existing) return;
  writeExpenses(seedExpenses);
}

