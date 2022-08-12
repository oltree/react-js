export const SORT_OPTIONS = {
  ASC: "ASC",
  DESC: "DESC",
  DEFAULT: "DEFAULT",
};

export const SORT_SCENARIOS = {
  [SORT_OPTIONS.ASC]: (current, next) => current.text.localeCompare(next.text),
  [SORT_OPTIONS.DESC]: (current, next) => next.text.localeCompare(current.text),
  [SORT_OPTIONS.DEFAULT]: null,
};

export const FILTER_BY_OPTIONS = {
  COMPLETED: "COMPLETED",
  DEFAULT: "DEFAULT",
};

export const FILTER_SCENARIOS = {
  [FILTER_BY_OPTIONS.COMPLETED]: (item) => item.isCompleted,
  [FILTER_BY_OPTIONS.DEFAULT]: null,
};
