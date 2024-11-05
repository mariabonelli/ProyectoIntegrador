/* AmongBugs */
import axios from "axios";
import { useEffect, useState } from "react";
import Timeline from "../Components/Timeline/Timeline";
import TimelineContent from "../Components/Timeline/TimelineContent";

const Data = [
  {
    _id: 1,
    estado: "Pendiente",
    start: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    tramite_id: 1,
    notificado: "✓",
  },
  {
    _id: 2,
    estado: "Evaluado",
    start: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    tramite_id: 2,
    notificado: "✓",
  },
  {
    _id: 3,
    estado: "Pagado",
    start: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    tramite_id: 3,
    notificado: "X",
  },
  {
    _id: 4,
    estado: "Finalizado",
    start: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    tramite_id: 3,
    notificado: "X",
  },
];

function HistorialDeNotificaciones() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => {});
  }, []);

  const Enum = ["Pendiente", "Evaluado", "Pagado", "Finalizado"];

  const ClassByStatus = (estado) => {
    if (estado === Enum[0]) return "primero";
    if (estado === Enum[1]) return "segundo";
    if (estado === Enum[2]) return "tercero";
    if (estado === Enum[3]) return "cuarto";
    if (estado === Enum[4]) return "primero";
    if (estado === Enum[5]) return "segundo";
    if (estado === Enum[6]) return "tercero";
    if (estado === Enum[7]) return "cuarto";
    if (estado === Enum[8]) return "primero";
    if (estado === Enum[9]) return "segundo";
    if (estado === Enum[10]) return "tercero";
    if (estado === Enum[11]) return "cuarto";
  };
  return (
    <div>
      <h2>Solicitud #000001</h2>
      {Data.map((item) => (
        <div key={item._id}>
          <Timeline
            className={`container_timeline right ${ClassByStatus(item.estado)}`}
          >
            <TimelineContent>
              <h2>{item.estado}</h2>
              <p>Notificacion {item.notificado}</p>
            </TimelineContent>
          </Timeline>
        </div>
      ))}
    </div>
  );
}

/* <div>
      {Data.map((item) => (
        <div key={item._id}>
          <Timeline
            className={`container_timeline right ${ClassByStatus(item.estado)}`}
          >
            <TimelineContent>
              <h2>{item.estado}</h2>
              <p>Notificacion {item.notificado}</p>
            </TimelineContent>
          </Timeline>
        </div>
      ))}
    </div> */

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

export default HistorialDeNotificaciones;
