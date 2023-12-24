import style from "./loginButtons.module.css";
import facebook from "../../assets/images/facebook-full.svg";
import google from "../../assets/images/google.svg";

const LoginButtons = () => {
  return (
    <>
      <div className={style.loginButtons}>
        <button>
          <img src={facebook} alt="Facebook" className={style.facebook} />
          <p>Facebook ilə</p>
        </button>
        <button>
          <img src={google} alt="Google" className={style.google} />
          <p>Google ilə</p>
        </button>
      </div>
      <p className={style.or}>və ya</p>
    </>
  );
};

export default LoginButtons;
