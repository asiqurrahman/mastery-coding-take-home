import { signIn } from "next-auth/react";
import { useState } from "react";

import { registerUser } from "routes/CREATE";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (values.password !== values.confirmPassword) return;

      let registeredUser;
      try {
        registeredUser = await registerUser({ ...values, userType: "TEACHER" });

        if (registeredUser) {
          await signIn("credentials", {
            callbackUrl: "/",
            username: values.username,
            password: values.password,
          });
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }

    signIn("credentials", {
      username: values.username,
      password: values.password,
      // callbackUrl: "/",
    });
  };

  return (
    <div className="auth-form__container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>{isLogin ? "Sign In" : "Teacher Sign up"}</h1>
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
        <button className="form-button" type="submit">
          {isLogin ? "Sign In" : "Register"}
        </button>
        <div className="flex-end">
          <button
            className="form-button auth-button"
            onClick={handleAuthChange}
          >
            {isLogin ? "Teacher Sign Up" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
