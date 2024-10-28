/* SaiyaBits */
import { useState } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import "./AgregarDepartamentoStyle.css";

function AgregarDepartamento() {
  const [departamento, setDepartamento] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleFormSubmit = () => {
    console.log("hola");
    const data = {
      departamento: departamento,
      descripcion: descripcion,
    };
    console.log(data);
  };
  return (
    <div className="agregar_departamento_container">
      <div className="agregar_departamento_container_form">
        <FormControl handleFormSubmit={handleFormSubmit}>
          <InputField
            value={departamento}
            outlined={true}
            type={"text"}
            name={"departamento"}
            required={true}
            placeholder={"Nombre del departamento"}
            handleChange={setDepartamento}
          />
          <TextArea
            value={descripcion}
            outlined={true}
            name={"descripcion_departamento"}
            required={true}
            placeholder={"Descripción del departamento"}
            handleChange={setDescripcion}
          />
        </FormControl>
      </div>
    </div>
  );
}

export default AgregarDepartamento;
