/* SaiyaBits */
import React from "react";
import "./Departamentos.css";
import FormControl from "../../Components/Form/FormControl";

const Departamentos = () => {
  const departamentos = [
    { id: 1, nombre: "Recursos Humanos" },
    { id: 2, nombre: "Finanzas" },
    { id: 3, nombre: "Marketing" },
  ];

  return (
    <FormControl>
      <div className="form_control">
        <div className="barra-de-busqueda">
          <input type="text" placeholder="Buscar Departamento o número de ID" />
          <button>Buscar</button>
        </div>
        <div className="encabezados">
          <span style={{ marginRight: "20px" }}>ID </span>
          <span style={{ flexGrow: 1 }}> Nombre Departamento</span>
        </div>
        {departamentos.map((departamento) => (
          <div key={departamento.id} className="departamento">
            <span style={{ marginRight: "25px" }}>{departamento.id}</span>
            <span style={{ flexGrow: 1 }}>{departamento.nombre}</span>
            <a href={`/departamento/${departamento.id}`}>Ver detalles</a>
          </div>
        ))}
        <button className="btn" type="submit">
          <span>Agregar +</span>
        </button>
      </div>
    </FormControl>
  );
};

export default Departamentos;
