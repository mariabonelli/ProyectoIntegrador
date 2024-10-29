import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "../Components/Calendar/Calendar";

function Agenda() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("axios");
    axios
      .get("http://localhost:8080/api/agendamientos/1/ver")
      .then((respuesta) => {
        setData(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      {data.length > 0 && <Calendar data={data} />}
    </div>
  );
}

export default Agenda;
