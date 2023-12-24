import Skeleton from ".";
import style from "./skeleton.module.css";
import styleCard from "../SearchCard/searchcard.module.css";

const SkeletonSearch = () => {
  return (
    <div className={styleCard.searchCard}>
      <Skeleton
        classes={`${style.customImage} ${style.margin0}`}
        style={{ width: "64px", height: "64px" }}
      />
      <div className={styleCard.right}>
        <Skeleton
          classes={`${style.title} ${style.width100} ${style.margin0}`}
        />
        <Skeleton
          classes={`${style.text} ${style.width100} ${style.margin0}`}
        />
      </div>
    </div>
  );
};

export default SkeletonSearch;
