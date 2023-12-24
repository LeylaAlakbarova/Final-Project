import style from "./features.module.css";
import box from "../../assets/images/box.svg";
import creditCard from "../../assets/images/card.svg";
import medalStar from "../../assets/images/medal.svg";

const Features = () => {
  return (
    <div className={style.features}>
      <div className={style.feature}>
        <img src={box} alt="Box" />
        <h3>Çatdırılma</h3>
      </div>
      <div className={style.feature}>
        <img src={creditCard} alt="Credit Card" />
        <h3>Kredit</h3>
      </div>
      <div className={style.feature}>
        <img src={medalStar} alt="Medal Star" />
        <h3>Zəmanət</h3>
      </div>
    </div>
  );
};

export default Features;
