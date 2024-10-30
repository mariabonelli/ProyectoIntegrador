import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "../../Components/Calendar/Calendar";
import Button from "../../Components/Button/Button";

const Data = [
  {
    fechaHora: "2024-10-28 15:00",
    id: "1",
    estado: "AGENDADO",
  },
  {
    fechaHora: "2024-10-29 18:00",
    id: "2",
    estado: "CANCELADO",
  },
  {
    fechaHora: "2024-10-29 16:00",
    id: "3",
    estado: "AGENDADO",
  },
  {
    fechaHora: "2024-10-28 18:00",
    id: "4",
    estado: "DISPONIBLE",
  },
  {
    fechaHora: "2024-10-26 15:00",
    id: "5",
    estado: "AGENDADO",
  },
];

function AgendaFuncionario() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);

    /*
    console.log("axios");
    axios
      .get("http://localhost:8080/api/agendamientos/1/veragendamientos")
      .then((respuesta) => {
        setData(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
      */
  }, []);

  const suspenderAgendamiento = (item) => {
    axios
      .get(`http://localhost:8080/api/agendamientos/${item}/suspender`)
      .then((respuesta) => {
        alert("Agendamiento suspendido con éxito");
        console.log(respuesta.data);
      })
      .catch((error) => {
        console.error("Error al suspender:", error);
        alert("Hubo un problema al suspender el agendamiento.");
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      {data.length > 0 && (
        <Calendar data={data} handleDeleteItem={suspenderAgendamiento} />
      )}
    </div>
  );
}

export default AgendaFuncionario;
