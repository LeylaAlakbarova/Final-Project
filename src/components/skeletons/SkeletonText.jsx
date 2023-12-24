import Skeleton from ".";
import style from "./skeleton.module.css";

const SkeletonText = () => {
  return (
    <li>
      <Skeleton classes={`${style.text} ${style.margin0}`} />
    </li>
  );
};

export default SkeletonText;
