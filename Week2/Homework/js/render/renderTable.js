import { formatAmount, getAmountClass, sumAmounts } from "../utils/format.js";

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

  if (!expenses.length) {
    tbody.innerHTML = `
      <tr class="result-table-empty">
        <td colspan="6">내역이 없습니다.</td>
      </tr>
    `;
  } else {
    tbody.innerHTML = expenses
      .map((e) => {
        const amountClass = getAmountClass(e.amount);
        return `
          <tr data-id="${escapeHtml(e.id)}">
            <td><input type="checkbox" class="row-check" /></td>
            <td>${escapeHtml(e.title ?? "")}</td>
            <td class="${escapeHtml(amountClass)}">${escapeHtml(formatAmount(e.amount ?? ""))}</td>
            <td>${escapeHtml(e.date ?? "")}</td>
            <td>${escapeHtml(e.category ?? "")}</td>
            <td>${escapeHtml(e.payment ?? "")}</td>
          </tr>
        `;
      })
      .join("");
  }

  const total = sumAmounts(expenses);
  const tds = tfoot.querySelectorAll("td");
  if (tds.length >= 2) {
    const totalCell = tds[1];
    const totalClass = getAmountClass(total);
    totalCell.classList.remove("is-plus", "is-minus");
    if (totalClass) totalCell.classList.add(totalClass);
    totalCell.textContent = formatAmount(total);
  }
}

