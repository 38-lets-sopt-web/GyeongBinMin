import { getExpenses } from "../state.js";
import { formatAmount } from "../utils/format.js";

export function bindModalDetail() {
  const modal = document.querySelector(".modal-detail");
  const backdrop = modal?.querySelector(".modal-backdrop");
  const panel = modal?.querySelector(".modal-panel");
  const closeBtn = modal?.querySelector(".detail-close");
  if (!modal || !backdrop || !panel || !closeBtn) return;

  const setText = (key, value) => {
    const el = modal.querySelector(`[data-detail="${key}"]`);
    if (el) el.textContent = String(value ?? "");
  };

  const close = () => {
    modal.hidden = true;
  };

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  panel.addEventListener("click", (e) => e.stopPropagation());

  const table = document.querySelector(".result-table");
  if (!table) return;

  table.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains("detail-open")) return;
    const tr = target.closest("tr[data-id]");
    if (!tr) return;
    const id = tr.getAttribute("data-id");
    if (!id) return;

    const expense = getExpenses().find((x) => String(x.id) === String(id));
    if (!expense) return;

    setText("title", expense.title);
    setText("amount", `${formatAmount(expense.amount)}원`);
    setText("date", expense.date);
    setText("category", expense.category);
    setText("payment", expense.payment);

    modal.hidden = false;
  });
}

