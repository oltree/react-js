import { memo } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import { FILTER_BY_OPTIONS, SORT_OPTIONS } from "../../config";

import styles from "./index.module.scss";

const TodoListHeader = ({
  inputSearch,
  onInputSearchChange,
  sortOption,
  onSortOptionChange,
  filterOption,
  onFilterCompletedTodos,
  onTodoRemoveAll,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.functionalContainer}>
        <input
          className={styles.searchField}
          value={inputSearch}
          type="search"
          placeholder="Search..."
          onChange={onInputSearchChange}
        />
        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel
            sx={{ color: "#000", fontFamily: "Arial" }}
            id="demo-select-small"
          >
            Sorting
          </InputLabel>
          <Select
            sx={{ fontFamily: "Arial" }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={sortOption}
            label="Sorting"
            onChange={onSortOptionChange}
          >
            <MenuItem sx={{ fontFamily: "Arial" }} value={SORT_OPTIONS.ASC}>
              Ascending
            </MenuItem>
            <MenuItem sx={{ fontFamily: "Arial" }} value={SORT_OPTIONS.DESC}>
              Descending
            </MenuItem>
            <MenuItem sx={{ fontFamily: "Arial" }} value={SORT_OPTIONS.DEFAULT}>
              Default
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }} size="small">
          <InputLabel
            sx={{ color: "#000", fontFamily: "Arial" }}
            id="demo-select-small"
          >
            Completed
          </InputLabel>
          <Select
            sx={{ fontFamily: "Arial" }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={filterOption}
            label="Completed"
            onChange={onFilterCompletedTodos}
          >
            <MenuItem
              sx={{ fontFamily: "Arial" }}
              value={FILTER_BY_OPTIONS.COMPLETED}
            >
              Complited
            </MenuItem>
            <MenuItem
              sx={{ fontFamily: "Arial" }}
              value={FILTER_BY_OPTIONS.DEFAULT}
            >
              Default
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div onClick={onTodoRemoveAll} className={styles.close} />
    </div>
  );
};

export default memo(TodoListHeader);
