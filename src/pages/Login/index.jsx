import style from "./login.module.css";
import formImg from "../../assets/images/formImg.svg";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../commerce/customer";
import { useRef } from "react";
import LoginButtons from "../../components/LoginButtons";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    getToken({ email: data.Email });
    navigate("/login/confirm");
  };

  const emailRef = useRef();

  return (
    <div className={style.login}>
      <div className={style.leftpart}>
        <h2>Daxil ol</h2>
        <LoginButtons />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formGroup}>
            <label>E-mail</label>
            <input
              id="email"
              type="email"
              ref={emailRef}
              placeholder="nümunə@gmail.com"
              {...register("Email", {
                required: "E-mail daxil edin.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "E-mail yanlışdır.",
                },
              })}
            />
            {errors.Email && (
              <span className={style.errorMessage}>{errors.Email.message}</span>
            )}
          </div>
          <input type="submit" value="Daxil ol" />
        </form>
        <p className={style.linkTo}>
          Hesabınız yoxdur? <Link to={"/register"}>Qeydiyyatdan keçin</Link>
        </p>
      </div>
      <div className={style.rightPart}>
        <img src={formImg} alt="Form" />
        <p className={style.linkTo}>
          Hesabınız yoxdur? <Link to={"/register"}>Qeydiyyatdan keçin</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
