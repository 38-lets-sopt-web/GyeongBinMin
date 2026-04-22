import { getExpenses, setFilteredExpenses } from "../state.js";
import { renderTable } from "../render/renderTable.js";
import { CATEGORY_LABEL, PAYMENT_LABEL } from "../constants.js";

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

function getTypeFromAmount(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n) || n === 0) return "";
  return n > 0 ? "income" : "expense";
}

function matchesTitle(expense, keyword) {
  if (!keyword) return true;
  return normalize(expense.title).includes(keyword);
}

export function bindFilters() {
  const form = document.querySelector(".filter-form");
  const titleInput = document.querySelector("#filter-title");
  const typeSelect = document.querySelector("#filter-type");
  const categorySelect = document.querySelector("#filter-category");
  const paySelect = document.querySelector("#filter-pay");
  const resetBtn = document.querySelector("#filter-reset");

  if (!form || !titleInput || !typeSelect || !categorySelect || !paySelect) return;

  const apply = () => {
    const keyword = normalize(titleInput.value);
    const type = normalize(typeSelect.value);
    const category = normalize(categorySelect.value);
    const payment = normalize(paySelect.value);

    const next = getExpenses().filter((e) => {
      if (!matchesTitle(e, keyword)) return false;

      if (type && type !== "all") {
        if (getTypeFromAmount(e.amount) !== type) return false;
      }

      if (category && category !== "all") {
        const label = CATEGORY_LABEL[category] ?? category;
        if (normalize(e.category) !== normalize(label)) return false;
      }

      if (payment && payment !== "all") {
        const label = PAYMENT_LABEL[payment] ?? payment;
        if (normalize(e.payment) !== normalize(label)) return false;
      }

      return true;
    });

    setFilteredExpenses(next);
    renderTable(next);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    apply();
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      titleInput.value = "";
      typeSelect.value = "all";
      categorySelect.value = "all";
      paySelect.value = "all";

      const all = getExpenses();
      setFilteredExpenses(all);
      renderTable(all);
    });
  }
}

