/* PatiDevs */
import { useEffect, useState } from "react";
import data from "../../assets/PruebasPatiDevs/TramitesLista";
import Button from "../../Components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdministracionDeTramites() {
  const [pagado, setPagado] = useState(false);
  const [dependencia, setDependencia] = useState("");

  useEffect(() => {
    console.log("use effect");
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    setInfoPage({
      title: "Administracion de tramites",
      subtitle: "Estas en el apartado para agregar tramites",
    });
  }, []);

  return (
    <div className="tramite_por_servicio_container">
      <div className="content_item">
        {console.log("return/render")}
        {data.map((item) => (
          <div key={item.id}>
            <Button variant={"btn_outlined"}>{item.nombre}</Button>
          </div>
        ))}
        <Button
          handleClick={() => navigate("/listadotramites")}
          variant={"btn_outlined btn_text_secondary"}
          style={{
            fontSize: "20px",
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default AdministracionDeTramites;
