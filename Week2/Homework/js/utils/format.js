export function formatAmount(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return "";

  const abs = Math.abs(n);
  const formatted = abs.toLocaleString("ko-KR");
  if (n === 0) return "0";
  return `${n > 0 ? "+" : "-"}${formatted}`;
}

export function sumAmounts(expenses) {
  return expenses.reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
}

export function getAmountClass(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n) || n === 0) return "";
  return n > 0 ? "is-plus" : "is-minus";
}

