import { getCheckedIds, setCheckedIds } from "../state.js";

export function bindSelection() {
  const table = document.querySelector(".result-table");
  const tbody = document.querySelector(".result-table tbody");
  const selectAll = document.querySelector("#select-all");
  if (!table || !tbody || !selectAll) return;

  const getVisibleIds = () => {
    return Array.from(tbody.querySelectorAll("tr[data-id]"))
      .map((tr) => tr.getAttribute("data-id"))
      .filter(Boolean);
  };

  const syncSelectAll = () => {
    const visible = getVisibleIds();
    if (!visible.length) {
      selectAll.checked = false;
      return;
    }
    const checked = getCheckedIds();
    selectAll.checked = visible.every((id) => checked.has(String(id)));
  };

  const toggleAll = (checked) => {
    const next = new Set(getCheckedIds());
    const visible = getVisibleIds();
    visible.forEach((id) => {
      if (checked) next.add(String(id));
      else next.delete(String(id));
    });
    setCheckedIds(next);

    tbody.querySelectorAll("tr[data-id] .row-check").forEach((el) => {
      el.checked = checked;
    });
    syncSelectAll();
  };

  selectAll.addEventListener("change", () => {
    toggleAll(selectAll.checked);
  });

  table.addEventListener("change", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (!target.classList.contains("row-check")) return;

    const tr = target.closest("tr[data-id]");
    if (!tr) return;

    const id = tr.getAttribute("data-id");
    if (!id) return;

    const next = new Set(getCheckedIds());
    if (target.checked) next.add(String(id));
    else next.delete(String(id));
    setCheckedIds(next);
    syncSelectAll();
  });

  const observer = new MutationObserver(() => {
    syncSelectAll();
  });

  observer.observe(tbody, { childList: true, subtree: true });
  syncSelectAll();
}

