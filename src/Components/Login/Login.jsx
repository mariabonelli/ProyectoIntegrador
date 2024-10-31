import { useState } from "react";
import axios from "axios";
import "./LoginStyle.css";
import FormControl from "../Form/FormControl";
import Button from "../Button/Button";
import InputField from "../Form/InputField";
import Signup from "../Login/Signup";
import rencalogo from "../../assets/Renca.png";

function Login({ loginIsSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);

  const handleSubmit = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/api/auth/login", body)
      .then((resp) => {
        console.log(resp.status);
        if (resp.status === 200) {
          localStorage.setItem("user", JSON.stringify(resp.data));
          loginIsSuccess(resp.data);
        }
      })
      .catch((error) => {
        console.log(error);
        loginIsSuccess(null);
      });
  };

  const signupIsSuccess = (data) => {
    console.log("signupIsSuccess", data);
    setEmail(data.email);
    setPassword(data.password);
    setSignup(false);
  };

  return (
    <div className="login_container">
      <div>
        <img width={250} src={rencalogo} alt="ícono" />
      </div>
      {!signup ? (
        <>
          <h2 className="tittle_iniciosesion">Inicio de Sesión</h2>
          <FormControl handleFormSubmit={handleSubmit}>
            <InputField
              placeholder={"Correo Electrónico"}
              type={"email"}
              outlined={true}
              name={"email"}
              value={email}
              handleChange={setEmail}
            />
            <InputField
              placeholder={"Contraseña"}
              type={"password"}
              outlined={true}
              name={"password"}
              value={password}
              handleChange={setPassword}
            />
          </FormControl>
          <div>
            <Button
              handleClick={(_) => setSignup(true)}
              variant="btn_small btn_outlined btn_secondary "
            >
              Registrarse
            </Button>
          </div>
        </>
      ) : (
        <Signup signupIsSuccess={signupIsSuccess} />
      )}
    </div>
  );
}

export default Login;
