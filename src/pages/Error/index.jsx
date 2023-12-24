import style from "./error.module.css";

const Error = () => {
  return (
    <div id={style.notfound}>
      <div className={style.notfound}>
        <div className={style.notfound404}>
          <h3>Oops! Səhifə tapılmadı</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Üzr istəyirik, lakin tələb etdiyiniz səhifə tapılmadı</h2>
      </div>
    </div>
  );
};

export default Error;
