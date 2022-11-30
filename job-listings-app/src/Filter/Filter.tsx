import { RemoveFilter } from "../types";
import style from "./Filter.module.css";

export const Filter = ({
  filters,
  removeFilter,
  clearFilters,
}: RemoveFilter) => {
  //   console.log(filters);
  //   removeFilter("test");

  return (
    <div className={style.Container}>
      <div className={style.Buttons}>
        {filters.map((filter: any) => (
          <div key={filter} className={style.ButtonWrapper}>
            <p className={style.ButtonText}>{filter}</p>
            <button
              id={filter}
              onClick={removeFilter}
              className={style.Button}
            ></button>
          </div>
        ))}
      </div>
      <p className={style.Clear} onClick={clearFilters}>
        Clear
      </p>
    </div>
  );
};
