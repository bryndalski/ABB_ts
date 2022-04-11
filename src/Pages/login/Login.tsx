import React, { useReducer, useState, useEffect, useDebugValue } from "react";
import LogInReducerInterface from "./LogInInterface"; // css
import CONFIG from "../../CONFIG.json";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./loginStyles.css";
import appStore from "../../storage/AppStore";
interface props {}
const loginState: LogInReducerInterface = {
  username: "",
  password: "",
};
/**
 *
 * @param state
 * @param action type of action and value
 */

function loginReducer(
  state: any,
  action: {
    type: String;
    value: any;
  }
) {
  let loginState: LogInReducerInterface = { ...state };

  /* console.log(loginState);*/
  switch (action.type) {
    case "username":
      loginState.username = action.value;
      break;

    case "password":
      loginState.password = action.value;
      break;

    default:
      return state;
  }

  return loginState;
}

export default function Login(props: props) {
  const [login, dispatch] = useReducer(loginReducer, loginState);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  //Watch for retyping password
  useEffect(() => {
    setError(false);
  }, [JSON.stringify(login)]);
  //Handle enter click event
  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        console.log("====================================");
        console.log(login, !login.username || !login.password);
        console.log("====================================");
        if (!login.username || !login.password) loginUser();
      }
    };
    document.addEventListener("keydown", listener);
    //clear
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  //login user
  const loginUser = async () => {
    console.log(login);

    axios({
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        ...login,
      },
      url: CONFIG.loginAddress,
    }).then((res) => {
      console.log(res);
      if (res.status === 200 && res.data.success) {
        console.log(res.data);
        appStore.setUser({ ...res.data.user, login: true });
        navigate("/home");

        // window.location.href = "/home";
      } else {
        setError(true);
        return;
      }
    });
  };

  return (
    <div className="bg h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col bg-white w-11/12 sm:w-96 min-h-96 justify-around p-4 rounded-lg">
        <h1 className="text-4xl text-[#17a2b8] m-3 text-center">Login</h1>
        <div className="relative">
          <input
            type="text"
            className="inp"
            placeholder={login.username || "Login"}
            value={login.username}
            onChange={(e) => {
              dispatch({
                type: "username",
                value: e.target.value,
              });
            }}
          />
          <span className="inp-border"></span>
        </div>
        <div className="relative">
          <input
            type="password"
            className="inp"
            placeholder={"password"}
            value={login.password}
            onChange={(e) => {
              dispatch({
                type: "password",
                value: e.target.value,
              });
            }}
          />
          <span className="inp-border"></span>
        </div>

        <button
          onClick={loginUser}
          disabled={!login.username || !login.password}
          className="btn border-[#17a2b8] p-2 border-solid border-2 min-w-fit rounded-2xl">
          Wyślij
        </button>
        <span
          className={`text-sm  text-center ${
            error ? "text-red-500" : "text-[rgb(0,0,0,0)]"
          }`}>
          Wrong login or password
        </span>
      </div>
    </div>
  );
}
