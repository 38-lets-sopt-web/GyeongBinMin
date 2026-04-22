export function formatAmount(amount) {
  // For base spec: no formatting/coloring required.
  return String(amount);
}

export function sumAmounts(expenses) {
  return expenses.reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
}

