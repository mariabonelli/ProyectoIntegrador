/* SaiyaBits */
import { useState, useEffect } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import "./AgregarServicioStyle.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function AgregarServicio() {
  const [servicio, setServicio] = useState("");
  const [descripcionServicio, setDescripcionServicio] = useState("");
  /* const [fechaIngreso, setFechaIngreso] = useState(new Date()); */

  const { id } = useParams();

  const editItem = () => {
    console.log("Se edita el servicio de ID:", id);
  };

  const addItem = () => {
    console.log("Se agrega un servicio");
  };

  const handleFormSubmit = () => {
    const body = {
      nombre: servicio,
      descripcion: descripcionServicio,
    };
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`http://localhost:8080/api/servicios/${id}`)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, []);
  console.log(id);
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
          {/* <button className="btn" type="submit">
            <span>Confirmar</span>
          </button> */}
        </FormControl>
      </div>
    </div>
  );
}

export default AgregarServicio;
