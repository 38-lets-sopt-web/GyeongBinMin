import { getExpenses, getFilters, setFilteredExpenses, setFilters } from "../state.js";
import { renderTable } from "../render/renderTable.js";
import { CATEGORY_LABEL, PAYMENT_LABEL } from "../constants.js";
import { applySort } from "./sort.js";
import { getSort } from "../state.js";

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

export function applyFilters(expenses) {
  const filters = getFilters();
  const keyword = normalize(filters.title);
  const type = normalize(filters.type);
  const category = normalize(filters.category);
  const payment = normalize(filters.payment);

  const next = expenses.filter((e) => {
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

  return applySort(next, getSort());
}

export function bindFilters() {
  const form = document.querySelector(".filter-form");
  const titleInput = document.querySelector("#filter-title");
  const typeSelect = document.querySelector("#filter-type");
  const categorySelect = document.querySelector("#filter-category");
  const paySelect = document.querySelector("#filter-pay");
  const resetBtn = document.querySelector("#filter-reset");

  if (!form || !titleInput || !typeSelect || !categorySelect || !paySelect) return;

  const current = getFilters();
  titleInput.value = current.title ?? "";
  typeSelect.value = current.type ?? "all";
  categorySelect.value = current.category ?? "all";
  paySelect.value = current.payment ?? "all";

  const apply = () => {
    setFilters({
      title: titleInput.value,
      type: typeSelect.value,
      category: categorySelect.value,
      payment: paySelect.value,
    });
    const sorted = applyFilters(getExpenses());
    setFilteredExpenses(sorted);
    renderTable(sorted);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    apply();
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      setFilters({
        title: "",
        type: "all",
        category: "all",
        payment: "all",
      });

      titleInput.value = "";
      typeSelect.value = "all";
      categorySelect.value = "all";
      paySelect.value = "all";

      const sorted = applyFilters(getExpenses());
      setFilteredExpenses(sorted);
      renderTable(sorted);
    });
  }
}

