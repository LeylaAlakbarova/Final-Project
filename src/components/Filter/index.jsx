import style from "./filter.module.css";
import filterImage from "../../assets/images/filter.svg";
import closeIcon from "../../assets/images/boldClose.svg";
import manatIcon from "../../assets/images/blackazn.svg";
import { useState } from "react";

const Filter = ({ setCategories, setPriceAbove, setPriceBelow, setColors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleMin = (e) => {
    setMin(e.target.value);
    setPriceAbove(e.target.value);
  };
  const handleMax = (e) => {
    setMax(e.target.value);
    setPriceBelow(e.target.value);
  };

  const [obj, setObj] = useState({
    brend: true,
    type: false,
    category: false,
    color: false,
    price: false,
  });

  const handleOpenClose = (text) => {
    setObj({ ...obj, [text]: !obj[text] });
  };

  const handleBrendClick = (e) => {
    e.target.checked == true
      ? setCategories((prev) => [...prev, e.target.value])
      : setCategories((prev) => prev.filter((item) => item != e.target.value));
  };
  const handleColorClick = (e) => {
    e.target.checked == true
      ? setColors((prev) => [...prev, e.target.value])
      : setColors((prev) => prev.filter((item) => item != e.target.value));
  };

  return (
    <div className={style.filter}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <img src={filterImage} alt="Sort" />
        <p>Filterləmələr</p>
      </button>
      <div className={`${isOpen ? style.openMenu : ""} ${style.menu}`}>
        <div className={style.filters}>
          <div className={style.filterBy}>
            <div
              className={style.headerFilter}
              onClick={() => handleOpenClose("brend")}
            >
              <h5>
                Brend <span className={style.count}>(4)</span>
              </h5>
              <div
                className={`${style.plusminus} ${
                  obj.brend == true ? style.active : ""
                }`}
              ></div>
            </div>
            <ul
              className={`${style.buttons} ${
                obj.brend == true ? style.openContainer : ""
              }`}
            >
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="Apple"
                    onClick={handleBrendClick}
                  />
                  <span className={style.checkmark}></span>
                  Apple
                </label>
              </li>
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="Samsung"
                    onClick={handleBrendClick}
                  />
                  <span className={style.checkmark}></span>
                  Samsung
                </label>
              </li>
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="Xiaomi"
                    onClick={handleBrendClick}
                  />
                  <span className={style.checkmark}></span>
                  Xiaomi
                </label>
              </li>
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="Honor"
                    onClick={handleBrendClick}
                  />
                  <span className={style.checkmark}></span>
                  Honor
                </label>
              </li>
            </ul>
          </div>
          <div className={style.filterBy}>
            <div
              className={style.headerFilter}
              onClick={() => handleOpenClose("type")}
            >
              <h5>
                Type <span className={style.count}></span>
              </h5>
              <div
                className={`${style.plusminus} ${
                  obj.type == true ? style.active : ""
                }`}
              ></div>
            </div>
          </div>
          <div className={style.filterBy}>
            <div
              className={style.headerFilter}
              onClick={() => handleOpenClose("category")}
            >
              <h5>
                Category <span className={style.count}></span>
              </h5>
              <div
                className={`${style.plusminus} ${
                  obj.category == true ? style.active : ""
                }`}
              ></div>
            </div>
          </div>
          <div className={style.filterBy}>
            <div
              className={style.headerFilter}
              onClick={() => handleOpenClose("color")}
            >
              <h5>
                Rəng <span className={style.count}></span>
              </h5>
              <div
                className={`${style.plusminus} ${
                  obj.color == true ? style.active : ""
                }`}
              ></div>
            </div>
            <ul
              className={`${style.buttons} ${
                obj.color == true ? style.openContainer : ""
              }`}
            >
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="White"
                    onClick={handleColorClick}
                  />
                  <span className={style.checkmark}></span>
                  White
                </label>
              </li>
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="Black"
                    onClick={handleColorClick}
                  />
                  <span className={style.checkmark}></span>
                  Black
                </label>
              </li>
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="Blue"
                    onClick={handleColorClick}
                  />
                  <span className={style.checkmark}></span>
                  Blue
                </label>
              </li>
              <li>
                <label className={style.container}>
                  <input
                    type="checkbox"
                    value="Silver"
                    onClick={handleColorClick}
                  />
                  <span className={style.checkmark}></span>
                  Silver
                </label>
              </li>
            </ul>
          </div>
          <div className={style.filterBy}>
            <div
              className={style.headerFilter}
              onClick={() => handleOpenClose("price")}
            >
              <h5>
                Qiymət <span className={style.count}></span>
              </h5>
              <div
                className={`${style.plusminus} ${
                  obj.price == true ? style.active : ""
                }`}
              ></div>
            </div>
            <div
              className={`${style.priceInputs} ${
                obj.price == true ? style.openContainer : ""
              }`}
            >
              <div className={style.moneyInput}>
                <input
                  type="number"
                  placeholder="Ən az"
                  onChange={handleMin}
                  max={max != 0 ? max : ""}
                />
                <img src={manatIcon} alt="Manat" />
              </div>
              <div className={style.inputDivider}></div>
              <div className={style.moneyInput}>
                <input
                  type="number"
                  placeholder="Ən çox"
                  min={min}
                  onChange={handleMax}
                />
                <img src={manatIcon} alt="Manat" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.phoneMenuHeader}>
          <div className={style.left}>
            <button
              className={style.close}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <img src={closeIcon} />
            </button>
            <h1 className={style.topHeader}>Filterləmələr</h1>
          </div>
        </div>
        <div className={style.phoneMenuFooter}>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            Filterlənmiş məhsulları göstər
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
