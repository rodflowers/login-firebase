import firabase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const router = useRouter();

  const register = () => {
    console.log(registerEmail);
    console.log(registerPassword);
  };

  const login = () => {
    console.log(loginEmail);
    console.log(loginPassword);
  };
  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login/Register</h2>
      <div className="row">
        <LoginRegisterForm
          email={loginEmail}
          setEmail={setLoginEmail}
          pass={loginPassword}
          setPass={setLoginPassword}
          buttonName="Login"
          handleSubmit={login}
        />
        <LoginRegisterForm
          email={registerEmail}
          setEmail={setRegisterEmail}
          pass={registerPassword}
          setPass={setRegisterPassword}
          buttonName="Register"
          handleSubmit={register}
        />
      </div>
    </div>
  );
};

export default Login;
