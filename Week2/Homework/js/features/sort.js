import { getFilteredExpenses, getSort, setFilteredExpenses, setSort } from "../state.js";
import { renderTable } from "../render/renderTable.js";

function toTime(dateStr) {
  const t = new Date(dateStr).getTime();
  return Number.isFinite(t) ? t : 0;
}

export function applySort(expenses, sort) {
  const next = [...expenses];
  if (sort === "date-asc") {
    next.sort((a, b) => toTime(a.date) - toTime(b.date));
    return next;
  }
  next.sort((a, b) => toTime(b.date) - toTime(a.date));
  return next;
}

export function bindSort() {
  const select = document.querySelector("#sort");
  if (!select) return;

  const current = getSort();
  if (select.value !== current) select.value = current;

  select.addEventListener("change", () => {
    const sort = select.value;
    setSort(sort);
    const next = applySort(getFilteredExpenses(), sort);
    setFilteredExpenses(next);
    renderTable(next);
  });
}

