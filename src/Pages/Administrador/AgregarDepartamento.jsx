/* SaiyaBits */
import { useState } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import "./AgregarDepartamentoStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AgregarDepartamento() {
  const [departamento, setDepartamento] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    const body = {
      nombre: departamento,
      descripcion: descripcion,
    };
    axios
      .post("http://localhost:8080/api/departamentos/crear", body)
      .then((response) => {
        if (response) {
          navigate("/departamentos");
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div className="agregar_departamento_container">
      <div className="agregar_departamento_container_form">
        <FormControl handleFormSubmit={handleFormSubmit} sinboton={true}>
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
          <button className="btn" type="submit">
            <span>Confirmar</span>
          </button>
        </FormControl>
      </div>
    </div>
  );
}

export default AgregarDepartamento;
