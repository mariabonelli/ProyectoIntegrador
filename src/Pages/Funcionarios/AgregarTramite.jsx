/* PatiDevs */
import { useState } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import axios from "axios";

function AgregarTramite() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = () => {
    const body = {
      nombre: nombre,
    };
    axios
      .post(`http://localhost:8080/api/tramites/nuevo/1`, body)
      .then((response) => {
        if (response) {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormControl handleFormSubmit={handleSubmit}>
      <InputField
        outlined={true}
        value={nombre}
        name={"Nombre"}
        handleChange={setNombre}
        placeholder={"Nombre de Tramite."}
        required={true}
      />
      <TextArea
        value={descripcion}
        outlined={true}
        name={"Descripción"}
        handleChange={setDescripcion}
        placeholder={"Descripción de Tramite."}
        required={false}
      />
    </FormControl>
  );
}

export default AgregarTramite;
