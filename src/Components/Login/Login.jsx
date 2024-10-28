import { useState } from "react";
import axios from "axios";
import "./LoginStyle.css";
import FormControl from "../Form/FormControl";
import Button from "../Button/Button";
import InputField from "../Form/InputField";

function Login({ loginIsSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

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
          setUser(resp.data);
          localStorage.setItem("user", JSON.stringify(resp.data));
          loginIsSuccess(resp.data);
        }
      })
      .catch((error) => {
        console.log(error);
        loginIsSuccess(null);
      });
  };

  return (
    <div className="login_container">
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
    </div>
  );
}

export default Login;
