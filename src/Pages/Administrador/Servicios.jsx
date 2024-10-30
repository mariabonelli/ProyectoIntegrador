import React from "react";
import "./Servicios.css";
import FormControl from "../../Components/Form/FormControl";

const Servicios = () => {
  const servicios = [
    { id: 1, nombre: "Veterinaria" },
    { id: 2, nombre: "Poda" },
    { id: 3, nombre: "Limpieza" },
    /* { id: 5, nombre: "Consultoría Estratégica" },
    { id: 6, nombre: "Soluciones Financieras" },
    { id: 7, nombre: "Seguridad Avanzada" },
    { id: 8, nombre: "Servicios Esenciales" },
    { id: 9, nombre: "Redes Conectadas" },
    { id: 10, nombre: "Innovación Sustentable" }, */
  ];

  return (
    <FormControl>
      <div className="form_control">
        <div className="barra-de-busqueda">
          <input type="text" placeholder="Buscar Servicio o número de ID" />
          <button>Buscar</button>
        </div>
        <div className="encabezados" style={{ marginLeft: "20px" }}>
          <span style={{ marginRight: "13px" }}>ID </span>
          <span style={{ flexGrow: 1 }}> Nombre Servicio</span>
        </div>
        {servicios.map((servicio) => (
          <div key={servicio.id} className="servicio">
            <input type="checkbox" />
            <span style={{ marginRight: "15px" }}>{servicio.id}</span>
            <span style={{ flexGrow: 1 }}>{servicio.nombre}</span>
          </div>
        ))}
      </div>
      <div className="botones">
        <button className="boton_eliminar" type="submit">
          <span>Eliminar</span>
        </button>
        <button className="boton_modificar" type="submit">
          <span>Modificar</span>
        </button>
        <button className="boton_agregar" type="submit">
          <span>Agregar +</span>
        </button>
      </div>
    </FormControl>
  );
};

export default Servicios;
