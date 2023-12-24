import style from "./orders.module.css";
import shoppingCart from "../../assets/images/gray-shopping-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { useEffect } from "react";
import { getOrders } from "../../store/actions/customerThunk";

const Orders = () => {
  const { orders, customerId, status } = useSelector((state) => state.customer);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getOrders({ customerId: customerId }));
  }, []);

  if (status == "loading") {
    return <LoadingScreen />;
  }

  return (
    <div className={style.orders}>
      {orders == undefined ? (
        <div className={style.emptyOrders}>
          <img src={shoppingCart} alt="Shopping Cart" />
          <p>Səbətinizdə hazırda heç bir sifariş yoxdur.</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Orders;
