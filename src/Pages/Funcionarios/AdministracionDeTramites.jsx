/* PatiDevs */
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdministracionDeTramites({ setInfoPage }) {
  const [data, setData] = useState([]);

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

  const navigate = useNavigate();

  useEffect(() => {
    setInfoPage({
      title: "Administracion de trámites",
      subtitle: "Estas en el apartado para agregar trámites",
    });
  }, []);

  return (
    <div className="tramite_por_servicio_container">
      <div className="content_item">
        {console.log("return/render")}
        {data.map((item) => (
          <div key={item._id}>
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
