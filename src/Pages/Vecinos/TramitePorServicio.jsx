import { useEffect, useState } from "react";
import data from "../../assets/PruebasPatiDevs/TramitesLista";
import Button from "../../Components/Button/Button";
import "./TramitePorServicioStyle.css";
import axios from "axios";
function TramitePorServicio({ setInfoPage }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setInfoPage({
      title: "Trámites",
      subtitle: "Estas en el listado de trámites disponibles",
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/tramites/lista`)
      .then((response) => {
        if (response) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
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
