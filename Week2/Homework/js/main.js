import { expenses as seedExpenses } from "../data/mock.js";
import { seedIfEmpty, readExpenses } from "./storage.js";
import { setExpenses, getFilteredExpenses } from "./state.js";
import { renderTable } from "./render/renderTable.js";

import { bindFilters } from "./features/filters.js";
import { bindSelection } from "./features/selection.js";
import { bindSort } from "./features/sort.js";
import { bindDelete } from "./features/delete.js";
import { bindModalAdd } from "./features/modalAdd.js";
import { bindHeaderRefresh } from "./features/headerRefresh.js";

function init() {
  seedIfEmpty(seedExpenses);

  const expenses = readExpenses();
  setExpenses(expenses);
  renderTable(getFilteredExpenses());

  bindHeaderRefresh();
  bindFilters();
  bindSelection();
  bindSort();
  bindDelete();
  bindModalAdd();
}

document.addEventListener("DOMContentLoaded", init);

