import React, { useEffect, useState } from "react";
import { userAtom } from "./atoms";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "./axios";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (user.isAuth) history.push("/");
  }, [user]);

  const login = async () => {
    try {
      const res = await axios.post("/auth", { email, password });
      console.log("auth", res.data);
      localStorage.setItem("token", res.data.user.token);
      setUser({
        isAuth: true,
        user: res.data.user,
      });
    } catch (err) {
      console.error("Error logging in", err.response.data);
      if (err.response.data.statusCode === 401)
        toast.error(err.response.data.message);
    }
  };

  const register = async () => {
    try {
      const res = await axios.post("/register", { email, password, name });
      console.log("auth", res.data);
      localStorage.setItem("token", res.data.user.token);
      setUser({
        isAuth: true,
        user: res.data.user,
      });
    } catch (err) {
      console.error("Error logging in", err.response.data);
      if (err.response.data.statusCode === 401)
        toast.error(err.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <input
          type="text"
          className="login__input"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="login__input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="login__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login__buttons">
          <button className="login__button" onClick={login}>
            Login
          </button>
          <button className="login__button" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
