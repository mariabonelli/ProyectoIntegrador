/* SaiyaBits */

import { useState, useEffect } from "react";
import "./ServiciosStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/Form/InputField";
import Button from "../../Components/Button/Button";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filterByName = servicios.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/servicios/lista`
      );
      setServicios(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error fetching servicios:", error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/servicios/lista`)
      .then((res) => {
        setServicios(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleAddClick = () => {
    navigate("/agregarservicio");
  };
  console.log(servicios);

  return (
    <div className="container_lista">
      <div className="barra_de_busqueda_container">
        <div className="barra_de_busqueda_container_input">
          <InputField
            value={searchTerm}
            type={"text"}
            name={"search"}
            required={true}
            placeholder={"Filtrar por nombre"}
            handleChange={setSearchTerm}
          />
        </div>
        <div>
          <Button variant={"btn btn_small"} handleChange={handleSearch}>
            Buscar
          </Button>
        </div>
      </div>
      <div className="encabezados">
        <span className="encabezado_id">ID </span>
        <span className="encabezado_nombre"> Nombre Servicio</span>
      </div>
      {filterByName.map((servicio) => (
        <div key={servicio.id} className="servicio">
          <input type="checkbox" />
          <span className="span1">{servicio.id}</span>
          <span className="span2">{servicio.nombre}</span>
          <a href={`/servicio/${servicio.id}`}>Ver detalles</a>
        </div>
      ))}
      <div className="botones">
        <Button handleClick={handleAddClick}>Eliminar </Button>
        <Button handleClick={handleAddClick}>Modificar </Button>
        <Button handleClick={handleAddClick}>Agregar + </Button>
      </div>
    </div>
  );
};

export default Servicios;
