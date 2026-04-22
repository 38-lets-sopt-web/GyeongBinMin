import { writeExpenses } from "../storage.js";
import { getCheckedIds, getExpenses, setCheckedIds, setExpenses, setFilteredExpenses } from "../state.js";
import { renderTable } from "../render/renderTable.js";
import { applyFilters } from "./filters.js";

export function bindDelete() {
  const btn = document.querySelector(".result-toolbar-btn--delete");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const checked = getCheckedIds();
    if (!checked.size) return;

    const remaining = getExpenses().filter((e) => !checked.has(String(e.id)));
    writeExpenses(remaining);
    setExpenses(remaining);
    setCheckedIds(new Set());

    const filtered = applyFilters(remaining);
    setFilteredExpenses(filtered);
    renderTable(filtered);
  });
}

