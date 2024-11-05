import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlantillasStyle.css";
import Button from "../../Components/Button/Button";
import Alert from "../../Components/Alert/Alert";

const Plantillas = ({ plantilla, onBack }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api")
      .then((resp) => {
        /*  console.log(resp.data); */
        setData(resp.data);
      })
      .catch((error) => {});
  }, []);

  const enviarCorreo = () => {
    axios.get(
      "http://localhost:8080/api/enviar/viole.pino95@gmail.com/+56957592258?departamento=veterinaria"
    );
  };

  /* const [textoEditable, setTextoEditable] = React.useState(
    plantilla.descripcion
  ); */

  const handleInputChange = (event) => {
    setTextoEditable(event.target.innerText);
  };

  const actualizarPlantilla = () => {
    console.log("Actualizando plantilla", textoEditable);
  };

  return (
    <div className="container">
      <h2>
        Plantilla <link rel="import" href="component.html" />
      </h2>
      <h3> Veterinaria </h3>
      <div className="plantilla-container">
        <div className="content">
          <div
            className="editable"
            contentEditable="true"
            suppressContentEditableWarning={true}
            onInput={handleInputChange}
          >
            {/* {textoEditable} */}
          </div>
        </div>
        <Button
          variant="primary"
          handleClick={() => console.log("Plantilla actualizada")}
        >
          Actualizar plantilla{" "}
        </Button>
      </div>

      <Button variant="second" handleClick={() => enviarCorreo()}>
        Enviar notificacion{" "}
      </Button>

      <div className="footer">
        <p>
          Centro Municipal Veterinario de Atención Primaria y Control Sanitario
        </p>
        <p>Departamento de Medio Ambiente</p>
        <p>Ilustre Municipalidad de Renca</p>
        <p>+ 56 977790943</p>
        <div className="footer-logo">
          <p>Atentamente,</p>
          <img src="/src/assets/Renca.png" alt="Logo Renca" />
          <p>
            <a href="https://www.renca.cl">www.renca.cl</a>
          </p>
          <button onClick={onBack} className="boton-volver">
            &#8592;
          </button>
        </div>
      </div>
    </div>
  );
};
export default Plantillas;
