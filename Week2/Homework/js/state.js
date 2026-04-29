const state = {
  expenses: [],
  filtered: [],
  sort: "date-desc",
  filters: {
    title: "",
    type: "all",
    category: "all",
    payment: "all",
  },
  checkedIds: new Set(),
};

export function setExpenses(expenses) {
  state.expenses = expenses;
  state.filtered = expenses;
}

export function getExpenses() {
  return state.expenses;
}

export function getFilteredExpenses() {
  return state.filtered;
}

export function setFilteredExpenses(expenses) {
  state.filtered = expenses;
}

export function getSort() {
  return state.sort;
}

export function setSort(sort) {
  state.sort = sort;
}

export function getFilters() {
  return state.filters;
}

export function setFilters(filters) {
  state.filters = {
    ...state.filters,
    ...filters,
  };
}

export function getCheckedIds() {
  return state.checkedIds;
}

export function setCheckedIds(next) {
  state.checkedIds = next;
}

