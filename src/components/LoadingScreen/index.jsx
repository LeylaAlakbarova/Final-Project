import style from "./loadingscreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={style.container}>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
    </div>
  );
};

export default LoadingScreen;
