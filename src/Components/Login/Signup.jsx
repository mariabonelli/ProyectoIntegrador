import { useState } from "react";
import axios from "axios";
import "./SignupStyle.css";
import FormControl from "../Form/FormControl";
import Button from "../Button/Button";
import InputField from "../Form/InputField";
import rencalogo from "../../assets/Renca.png";

function Signup({ signupIsSuccess }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [confirmemail, setConfirmemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [section, setSection] = useState(0);

  const handleSubmit = () => {
    if (email !== confirmemail) return;
    if (password !== confirmpassword) return;
    const body = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      direccion: direccion,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/api/auth/registro", body)
      .then((resp) => {
        if (resp.data) {
          console.log("Registro exitoso", resp.data);
          localStorage.setItem("user", JSON.stringify(resp.data));
          signupIsSuccess({
            email: email,
            password: password,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("Error en el registro");
        // setError("Error en el registro. Por favor verifica tus datos");
      });
  };

  return (
    <div className="signup_container">
      <div>
        <img width={250} src={rencalogo} alt="ícono" />
      </div>
      <h2>Registro</h2>
      <FormControl disablebutton={section < 1} handleFormSubmit={handleSubmit}>
        {section === 0 ? (
          <>
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
              type={"tel"}
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
            <Button
              handleClick={() => setSection(1)}
              variant="btn_small btn_outlined"
            >
              siguiente ⇾
            </Button>
          </>
        ) : (
          <>
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
              value={confirmemail}
              handleChange={setConfirmemail}
            />
            {email !== confirmemail && (
              <div style={{ color: "red", borderColor: "1px solid red" }}>
                los correos no coinciden
              </div>
            )}
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
              value={confirmpassword}
              handleChange={setConfirmpassword}
            />
            {password !== confirmpassword && (
              <div style={{ color: "red", borderColor: "1px solid red" }}>
                el password no coincide
              </div>
            )}
            <div style={{ margin: "20px 0" }}>
              <Button
                handleClick={() => setSection(0)}
                variant="btn_small btn_outlined"
              >
                ⇽ atras
              </Button>
            </div>
          </>
        )}
      </FormControl>
    </div>
  );
}
export default Signup;
