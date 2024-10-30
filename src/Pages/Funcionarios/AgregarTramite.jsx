/* PatiDevs */
import { useState, useEffect } from "react";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import axios from "axios";

function AgregarTramite() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleSubmit = () => {
    const body = {
      nombre: nombre,
    };

    if (id) {
      axios
        .put(`http://localhost:8080/api/tramites/editar/${id}`, body)
        .then((response) => {
          if (response) {
            navigate("/listadotramites");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(`http://localhost:8080/api/tramites/nuevo/1`, body)
        .then((response) => {
          if (response) {
            navigate("/listadotramites");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/tramites/${id}`).then((response) => {
        console.log(response.data);
        setNombre(response.data.nombre);
      });
    }
  }, []);

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
