import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Advertisement from "./Advertisement";
import appleLogo from "../assets/images/apple-logo.png";
import iPhoneAirTag from "../assets/images/iPhoneAirTag.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedProducts } from "../store/actions/productThunk";
import LoadingScreen from "./LoadingScreen";
import SkeletonText from "./skeletons/SkeletonText";

const MenuItem = ({ name, link, dropdownCategory, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { selectedProducts } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSelectedProducts({ order: "created", category: dropdownCategory })
    );
  }, []);

  if (selectedProducts.status == "loading") {
    <LoadingScreen />;
  }

  const filtered = selectedProducts.products?.filter(
    (selected) =>
      selected.order == "created" &&
      selected.category == dropdownCategory &&
      selected.length != 0
  )[0];

  return (
    <li
      className={`${isOpen ? style.openDropdown : ""} ${
        dropdownCategory && style.dropdown
      }`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? style.active : "")}
      >
        {name}
      </NavLink>
      {dropdownCategory && (
        <div className={`${isOpen ? style.open : ""} ${style.dropdownMenu}`}>
          <div className={style.leftPart}>
            <ul>
              {filtered != undefined ? (
                filtered.data?.map((product) => {
                  return (
                    <li key={product.id}>
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                  );
                })
              ) : (
                <>
                  {[...Array(9).keys()].map((i) => {
                    return <SkeletonText key={i} />;
                  })}
                </>
              )}
            </ul>
          </div>
          <Advertisement
            isWhiteBack={false}
            logo={appleLogo}
            message="Əşyalarınızı tapmağın super asan yolu."
            price="79"
            name="AirTag"
            link="#"
            image={iPhoneAirTag}
            styleEx={{ maxWidth: "490px", fontSize: "1.5rem" }}
          />
        </div>
      )}
    </li>
  );
};

export default MenuItem;
