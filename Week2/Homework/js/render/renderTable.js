import { formatAmount, sumAmounts } from "../utils/format.js";

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderTable(expenses) {
  const tbody = document.querySelector(".result-table tbody");
  const tfoot = document.querySelector(".result-table tfoot");
  if (!tbody || !tfoot) return;

  tbody.innerHTML = expenses
    .map((e) => {
      return `
        <tr data-id="${escapeHtml(e.id)}">
          <td><input type="checkbox" class="row-check" /></td>
          <td>${escapeHtml(e.title ?? "")}</td>
          <td>${escapeHtml(formatAmount(e.amount ?? ""))}</td>
          <td>${escapeHtml(e.date ?? "")}</td>
          <td>${escapeHtml(e.category ?? "")}</td>
          <td>${escapeHtml(e.payment ?? "")}</td>
        </tr>
      `;
    })
    .join("");

  const total = sumAmounts(expenses);
  const tds = tfoot.querySelectorAll("td");
  // current markup: [blank, total, value(colspan=4)]
  if (tds.length >= 3) {
    tds[2].textContent = String(total);
  }
}

