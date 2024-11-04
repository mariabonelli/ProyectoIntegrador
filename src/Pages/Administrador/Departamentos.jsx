/* SaiyaBits */

import { useState, useEffect } from "react";
import "./DepartamentosStyle.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../Components/Form/InputField";
import Button from "../../Components/Button/Button";

const Departamentos = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filterByName = departamentos.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/departamentos/lista`
      );
      setDepartamentos(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching departamentos:", error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/departamentos/lista`)
      .then((res) => {
        setDepartamentos(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleAddClick = () => {
    navigate("/agregardepartamento");
  };
  console.log(departamentos);

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
      </div>
      <div className="encabezados">
        <span className="encabezado_id">ID </span>
        <span className="encabezado_nombre"> Nombre Departamento</span>
      </div>
      {filterByName.map((departamento) => (
        <div key={departamento.id} className="departamento">
          <span className="span1">{departamento.id}</span>
          <span className="span2">{departamento.nombre}</span>
          <Link to={`/servicios/${departamento.id}`}>servicios asociados</Link>
        </div>
      ))}
      <div className="agregar">
        <Button handleClick={handleAddClick}>Agregar + </Button>
      </div>
    </div>
  );
};

export default Departamentos;
