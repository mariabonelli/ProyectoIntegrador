import Drawer from "./Components/Drawer/Drawer";
import { useState } from "react";
import FormControl from "./Components/Form/FormControl";
import InputField from "./Components/Form/InputField";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    console.log(data);
  };
  return (
    <>
      <Drawer>
        <FormControl handleFormSubmit={handleFormSubmit}>
          <InputField
            type="text"
            name="nombre"
            placeholder={"Ingresa tu nombre"}
            value={name}
            handleChange={setName}
            required={true}
          />
          <InputField
            type="email"
            name="correo"
            placeholder={"Ingresa tu correo"}
            value={email}
            handleChange={setEmail}
            required={true}
          />
          <InputField
            type="password"
            name="contraseña"
            placeholder={"Ingresa tu contraseña"}
            value={password}
            handleChange={setPassword}
            required={true}
          />
        </FormControl>
      </Drawer>
    </>
  );
}

export default App;
