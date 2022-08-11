import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAuthChange = (e) => {
    e.preventDefault();

    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div className="auth-form__container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>{isLogin ? "Sign In" : "Sign up"}</h1>
        <input
          type="text"
          name="username"
          value={values?.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={values?.password}
          onChange={handleChange}
          placeholder="password"
        />
        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            value={values?.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        )}
        <button className="form-button auth-button" onClick={handleAuthChange}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
        <button className="form-button" type="submit">
          {isLogin ? "Sign In" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
