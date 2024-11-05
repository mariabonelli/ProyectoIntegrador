/* SaiyaBits */

import { useState, useEffect } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
/* import "./ModificarDepartamentoStyle.css"; */

function ModificarDepartamento({ departamentoData, onSave }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Cargar datos del departamento al montar el componente o cuando cambie `departamentoData`
  useEffect(() => {
    if (departamentoData) {
      setNombre(departamentoData.nombre || "");
      setDescripcion(departamentoData.descripcion || "");
    }
  }, [departamentoData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      nombre: nombre,
      descripcion: descripcion,
    };
    console.log(updatedData); // Puedes reemplazar esto con una llamada a una API para guardar los cambios
    if (onSave) onSave(updatedData);
  };

  return (
    <div className="modificar_departamento_container">
      <div className="modificar_departamento_container_form">
        <FormControl handleFormSubmit={handleFormSubmit}>
          <InputField
            value={nombre}
            outlined={true}
            type={"text"}
            name={"nombre"}
            required={true}
            placeholder={"Nombre del departamento"}
            handleChange={setNombre}
          />
          <TextArea
            value={descripcion}
            outlined={true}
            name={"descripcion"}
            required={true}
            placeholder={"Descripción del departamento"}
            handleChange={setDescripcion}
          />
          <button className="btn" type="submit">
            <span>Guardar cambios</span>
          </button>
        </FormControl>
      </div>
    </div>
  );
}

export default ModificarDepartamento;
