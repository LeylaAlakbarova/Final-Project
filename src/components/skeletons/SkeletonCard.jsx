import Skeleton from ".";
import style from "./skeleton.module.css";
import styleCard from "../Card/card.module.css";

const SkeletonCard = () => {
  return (
    <div className={styleCard.card}>
      <Skeleton classes={`${style.image} ${style.width100}`} />
      <Skeleton classes={`${style.title} ${style.width100}`} />
      <Skeleton classes={`${style.text} ${style.width100}`} />
    </div>
  );
};

export default SkeletonCard;
