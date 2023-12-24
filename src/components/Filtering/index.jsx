import Filter from "../Filter";
import Sorting from "../Sorting";
import style from "./filtering.module.css";

const Filtering = ({
  setSortBy,
  setCategories,
  setPriceAbove,
  setPriceBelow,
  setColors,
  count,
}) => {
  return (
    <div className={style.filtering}>
      <Sorting setSortBy={setSortBy} count={count} />
      <div className={style.divider}></div>
      <Filter
        setCategories={setCategories}
        setPriceAbove={setPriceAbove}
        setPriceBelow={setPriceBelow}
        setColors={setColors}
      />
    </div>
  );
};

export default Filtering;
