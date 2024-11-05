/* OneBits */
import React, {useState} from "react";
import FormControl from "../Components/Form/FormControl";

function RecuperarCuenta() {
  const [mensaje, setMensaje] = useState ('');
  
  const handleFormSubmit = (form) => {
    const email = form.email.value;

    setMensaje(`Se ha enviado un enlace de recuperación a ${email}`);
    form.reset();
  };
return <div>
    <h1>RecuperarCuenta</h1>
    <FormControl handleFormSubmit={handleFormSubmit}>
      <label>
        correo Electronico:
        <input
        type="email"
        name="email"
        required
        />
      </label>
    </FormControl>
  </div>;
}
export default RecuperarCuenta;

