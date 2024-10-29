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
function Signup() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = () => {
    const body = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      direccion: direccion,
      email: email,
      password: password,

    };
    axios
    .post("localhost:8080/api/auth/registro", body)
    .then((resp)) => {

    }
  }
  return (
    <div className="signup_container">
      <h2>Registro</h2>
      <FormControl  handleFormSubmit={handleSubmit}>
        <InputField
          placeholder={"Nombre"}
          type={"text"}
          outlined={true}
          name={"nombre"}
          value={nombre}
          handleChange={setNombre}
        />
        <InputField
          placeholder={"Apellido"}
          type={"text"}
          outlined={true}
          name={"apellido"}
          value={apellido}
          handleChange={setApellido}
        />
        <InputField
          placeholder={"Teléfono"}
          type={Number}
          outlined={true}
          name={"telefono"}
          value={telefono}
          handleChange={setTelefono}
        />
        <InputField
          placeholder={"Dirección"}
          type={"text"}
          outlined={true}
          name={"direccion"}
          value={direccion}
          handleChange={setDireccion}
        />
        <InputField
          placeholder={"Correo Electrónico"}
          type={"email"}
          outlined={true}
          name={"email"}
          value={email}
          handleChange={setEmail}
        />
        <InputField
          placeholder={"Confirmar correo electrónico"}
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
      
      <InputField
          placeholder={"Confirmar contraseña"}
          type={"password"}
          outlined={true}
          name={"password"}
          value={password}
          handleChange={setPassword}
        />
      </FormControl>


    </div>
  )
}
export default Login;
