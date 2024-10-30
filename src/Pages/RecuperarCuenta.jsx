/* OneBits */
import React, { useState } from "react";
import FormControl from "../Components/Form/FormControl";
import Button from "../Button/Button";

function RecuperarCuenta() {
  const [mensaje, setMensaje] = useState("");

  const handleFormSubmit = (form) => {
    const email = form.email.value;

    setMensaje(`Se ha enviado un enlace de recuperación a ${email}`);
    form.reset();
  };

  return (
    <div>
      <h1>RecuperarCuenta</h1>
      <FormControl handleFormSubmit={handleFormSubmit}>
        <label>
          correo Electronico:
          <input type="email" name="email" required />
        </label>
        <div>
          <Button
            handleClick={(_) => setSignup(true)}
            variant="btn_small btn_outlined btn_secondary "
          >
            Aceptar
          </Button>
        </div>
      </FormControl>
    </div>
  );
}
export default RecuperarCuenta;
