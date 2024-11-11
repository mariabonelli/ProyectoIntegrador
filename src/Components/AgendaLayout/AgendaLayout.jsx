import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "../Calendar/Calendar";
import Button from "../Button/Button";

function AgendaLayout({ key, setKey }) {
  const [data, setData] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/agendamientos/1/veragendamientos")
      .then((respuesta) => {
        setData(respuesta.data);
        console.log("data:", respuesta.data);

        axios
          .get("http://localhost:8080/api/agendamientos/1/ver?tipo=ADMIN")
          .then((resp) => {
            setSchedule(resp.data);
            console.log("schedule:", resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const suspenderAgendamiento = (item) => {
    axios
      .get(`http://localhost:8080/api/agendamientos/${item}/suspender`)
      .then((respuesta) => {
        alert("Agendamiento suspendido con éxito");
        console.log(respuesta.data);
        setKey(key + 1);
      })
      .catch((error) => {
        console.error("Error al suspender:", error);
        alert("Hubo un problema al suspender el agendamiento.");
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <Calendar
        data={data}
        handleDeleteItem={suspenderAgendamiento}
        schedule={schedule}
        key={key}
        setKey={setKey}
      />
    </div>
  );
}

export default AgendaLayout;
