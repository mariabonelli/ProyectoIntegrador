/* PatiDevs Muestra los Estados de lo Tramites de Vecino*/
/* Vecino */
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import Button from "../../Components/Button/Button";

const user_id = 1;
const user_tipo = "VECINO";

function EstadoTramite({ setInfoPage }) {
  const [data, setData] = useState([]);
  const [route, setRoute] = useState(
    `http://localhost:8080/api/solicitudes/lista`
  );
  const [filter, setFilter] = useState(undefined);

  const filtroPorVecinoID = data.filter(
    (item) => item.vecino && item.vecino._id === user_id
  );

  const filtroPorFinalizado = filtroPorVecinoID.filter((item) =>
    filter === undefined
      ? item.estado !== "FINALIZADO"
      : item.estado !== "FINALIZADO" && item.estado === filter
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
      title: "Estado de Trámites",
      subtitle: "Estas en el listado de tus trámites en revisión",
    });
  }, []);

  return (
    <div style={{ margin: "20px auto", maxWidth: "100%" }}>
      <div
        style={{ display: "flex", flexDirection: "columns", margin: "20px" }}
      >
        <Button
          handleClick={() => {
            setFilter("PAGADO");
          }}
          variant="btn_small"
        >
          Pagado
        </Button>
        <Button
          handleClick={() => {
            setFilter("PENDIENTE");
          }}
          variant="btn_small"
        >
          Pendiente
        </Button>
        <Button
          handleClick={() => {
            setFilter("EVALUADO");
          }}
          variant="btn_small"
        >
          Evaluado
        </Button>
        <Button
          handleClick={() => {
            setFilter(undefined);
          }}
          variant="btn_small"
        >
          Todos
        </Button>
      </div>
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
            {item.tramite.nombre}
          </ListItemTitle>
        </List>
      ))}
    </div>
  );
}

export default EstadoTramite;
