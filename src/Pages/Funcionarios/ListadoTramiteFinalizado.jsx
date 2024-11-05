/*  PatiDevs Listado general de Tramites exclusivivamente FINALIZADOS para Funcionario */
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";

const user_id = 0;
const user_tipo = "FUNCIONARIO";

function ListadoTramitesFinalizados({ setInfoPage }) {
  const [data, setData] = useState([]);
  const [route, setRoute] = useState(
    `http://localhost:8080/api/solicitudes/lista`
  );

  const filtroPorFinalizado = data.filter(
    (item) => item.estado === "FINALIZADO"
  );

  useEffect(() => {
    axios.get(route).then((response) => {
      if (response) {
        setData(response.data);
      }
    });
  }, [route]);

  useEffect(() => {
    setInfoPage({
      title: "Listado Trámites",
      subtitle: "estas en el listado de trámites finalizados",
    });
  }, []);

  return (
    <div style={{ margin: "20px auto", maxWidth: "100%" }}>
      {filtroPorFinalizado.map((item) => (
        <List key={item._id}>
          <ListItemTitle
            subtitle={new Date(item.createAt).toLocaleString("es-ES", {
              weekday: "long", // "lunes", "martes", etc.
              year: "numeric", // "2024"
              month: "long", // "octubre"
              day: "numeric", // "28"
              hour: "2-digit", // "12" (por ejemplo)
              minute: "2-digit", // "00" (por ejemplo)
              second: "2-digit", // "00" (por ejemplo)
              hour12: true, // formato de 12 horas (opcional)
            })}
            action={item.estado}
          >
            {" "}
            {item.tramite.nombre}
          </ListItemTitle>
        </List>
      ))}
    </div>
  );
}

export default ListadoTramitesFinalizados;
