import style from "./skeleton.module.css";

const Skeleton = ({ classes }) => {
  const classNames = `${style.skeleton} ${classes} ${style.animatePulse}`;
  return <div className={classNames}></div>;
};

export default Skeleton;
