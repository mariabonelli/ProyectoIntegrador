/* PatiDevs Lista de Tramites disponibles para creacion de solicitud para el Vecino*/
import { useEffect, useState } from "react";
import data from "../../assets/PruebasPatiDevs/TramitesLista";
import Button from "../../Components/Button/Button";
import "./TramitePorServicioStyle.css";
import axios from "axios";
function TramitePorServicio({ setInfoPage }) {
  useEffect(() => {
    console.log("use effect");
  }, []);

  useEffect(() => {
    setInfoPage({
      title: "Trámites",
      subtitle: "Estas en el listado de trámites disponibles",
    });
  }, []);

  return (
    <div className="tramite_por_servicio_container">
      <div className="content_item">
        {console.log("return/render")}
        {data.map((item) => (
          <div key={item.id}>
            <Button>{item.nombre}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TramitePorServicio;
