import { CATEGORY_LABEL, PAYMENT_LABEL } from "../constants.js";
import { writeExpenses } from "../storage.js";
import { getCheckedIds, getExpenses, setCheckedIds, setExpenses, setFilteredExpenses } from "../state.js";
import { renderTable } from "../render/renderTable.js";
import { applyFilters } from "./filters.js";

function openModal(modal) {
  modal.hidden = false;
}

function closeModal(modal, form) {
  modal.hidden = true;
  if (form) form.reset();
}

function nextId(expenses) {
  const max = expenses.reduce((m, e) => Math.max(m, Number(e.id) || 0), 0);
  return max + 1;
}

function validateExpenseForm(data) {
  const { title, type, amountRaw, date, categoryKey, payKey } = data;

  if (!title || !type || !amountRaw || !date || !categoryKey || !payKey) {
    return { valid: false, message: "모든 항목을 입력해주세요." };
  }

  const amountNum = Number(amountRaw);
  if (!Number.isFinite(amountNum) || amountNum <= 0) {
    return { valid: false, message: "금액을 올바르게 입력해주세요." };
  }

  return { valid: true, amountNum };
}

export function bindModalAdd() {
  const addBtn = document.querySelector(".result-toolbar-btn--add");
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".modal-backdrop");
  const panel = document.querySelector(".modal-panel");
  const closeBtn = document.querySelector(".modal-close");
  const form = document.querySelector(".modal-form");
  const submitBtn = document.querySelector(".modal-submit");

  const titleEl = document.querySelector("#new-title");
  const typeEl = document.querySelector("#new-type");
  const amountEl = document.querySelector("#new-amount");
  const dateEl = document.querySelector("#new-date");
  const categoryEl = document.querySelector("#new-category");
  const payEl = document.querySelector("#new-pay");

  if (!addBtn || !modal || !backdrop || !panel || !closeBtn || !form || !submitBtn) return;
  if (!titleEl || !typeEl || !amountEl || !dateEl || !categoryEl || !payEl) return;

  addBtn.addEventListener("click", () => {
    openModal(modal);
  });

  closeBtn.addEventListener("click", () => {
    closeModal(modal, form);
  });

  backdrop.addEventListener("click", () => {
    closeModal(modal, form);
  });

  panel.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  submitBtn.addEventListener("click", () => {
    const formData = {
      title: String(titleEl.value ?? "").trim(),
      type: String(typeEl.value ?? "").trim(),
      amountRaw: String(amountEl.value ?? "").trim(),
      date: String(dateEl.value ?? "").trim(),
      categoryKey: String(categoryEl.value ?? "").trim(),
      payKey: String(payEl.value ?? "").trim(),
    };

    const validation = validateExpenseForm(formData);
    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    const { title, type, date, categoryKey, payKey } = formData;
    const { amountNum } = validation;
    const amount = type === "expense" ? -Math.abs(amountNum) : Math.abs(amountNum);
    const category = CATEGORY_LABEL[categoryKey] ?? categoryKey;
    const payment = PAYMENT_LABEL[payKey] ?? payKey;

    const current = getExpenses();
    const created = {
      id: nextId(current),
      title,
      date,
      category,
      payment,
      amount,
    };

    const next = [created, ...current];
    writeExpenses(next);
    setExpenses(next);

    if (getCheckedIds().size) setCheckedIds(new Set());

    const filtered = applyFilters(next);
    setFilteredExpenses(filtered);
    renderTable(filtered);

    closeModal(modal, form);
  });
}

