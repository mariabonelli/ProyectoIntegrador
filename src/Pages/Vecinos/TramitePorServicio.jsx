/* PatiDevs */
import { useEffect, useState } from "react";
import data from "../../assets/PruebasPatiDevs/TramitesLista";
import Button from "../../Components/Button/Button";
import "./TramitePorServicioStyle.css";
import axios from "axios";
function TramitePorServicio() {
  const [pagado, setPagado] = useState(false);
  const [dependencia, setDependencia] = useState("");

  useEffect(() => {
    console.log("use effect");
  }, []);

  return (
    <div className="tramite_por_servicio_container">
      <div className="content_item">
        {/* <button onClick={() => {}}>{pagado ? "Pagado" : "No Pagado"}</button>
        <button
          onClick={() => {
            setDependencia("Dependencia Activada");
          }}
        >
          {dependencia != ""
            ? "Dependencia Activada"
            : "Dependencia Desactivada"}
        </button> */}

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
