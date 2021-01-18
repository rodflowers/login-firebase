import firebase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { toast } from "react-toastify";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("rfloresdz@gmail.com");
  const [loginPassword, setLoginPassword] = useState("bronx2020");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const router = useRouter();

  const register = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then((user) => {
        console.log(`REGISTER ${user}`);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const login = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then((user) => {
        console.log("LOGIN ====> ", user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const googleLogin = async () => {
    await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        console.log("LOGIN", user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login/Register</h2>
      <Button
        className="mb-3 col-md-6 offset-md-3"
        onClick={googleLogin}
        type="danger"
        shape="round"
        icon={<GoogleOutlined />}
        size="large"
        block
      >
        Login Con Google
      </Button>
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
