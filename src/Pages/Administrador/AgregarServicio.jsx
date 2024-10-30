/* SaiyaBits */
import { useState } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import "./AgregarServicioStyle.css";

function AgregarServicio() {
  const [servicio, setServicio] = useState("");
  const [descripcionServicio, setDescripcionServicio] = useState("");
  /* const [fechaIngreso, setFechaIngreso] = useState(new Date()); */

  const handleFormSubmit = () => {
    const data = {
      servicio: servicio,
      descripcionServicio: descripcionServicio,
    };
    console.log(data);
  };
  return (
    <div className="agregar_servicio_container">
      <div className="agregar_servicio_container_form">
        <FormControl handleFormSubmit={handleFormSubmit}>
          <InputField
            value={servicio}
            outlined={true}
            type={"text"}
            name={"servicio"}
            required={true}
            placeholder={"Nombre del servicio"}
            handleChange={setServicio}
          />
          {/* <InputField
            value={fechaIngreso}
            outlined={true}
            type={"date"}
            name={"fechaIngreso"}
            required={true}
            placeholder={"Fecha de ingreso"}
            handleChange={setFechaIngreso}
          /> */}
          <TextArea
            value={descripcionServicio}
            outlined={true}
            name={"descripcion_servicio"}
            required={true}
            placeholder={"Descripción del servicio"}
            handleChange={setDescripcionServicio}
          />
          <button className="btn" type="submit">
            <span>Confirmar</span>
          </button>
        </FormControl>
      </div>
    </div>
  );
}

export default AgregarServicio;
