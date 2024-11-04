/* AmongBugs */
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../Components/List/List";
import ListItemTitle from "../Components/List/ListItemTitle";
import "./ListaDeServiciosStyle.css";

function ListadoDeServicios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/notificaciones/lista")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="listado_servicios_container">
      {data.map((item) => (
        <div key={item.notificacionId}>
          <List>
            <ListItemTitle subtitle={item.contenidoMensaje}>
              {item.motivo}
            </ListItemTitle>
          </List>
        </div>
      ))}
    </div>
  );
}
export default ListadoDeServicios;
{
  /* <>
      {Data.map((item) => (
        <div key={item._id}>
          <List>
            <ListItemTitle
              subtitle={item.estado}
              action={item.start.toLocaleString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })}
            >
              {item.motivo}
            </ListItemTitle>
          </List>
        </div>
      ))}
    </>
  );
} */
}
