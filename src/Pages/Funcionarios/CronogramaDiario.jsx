/* Quackendars */
import { useState, useEffect } from "react";
import axios from "axios";

function CronogramaDiario() {
  const [citas, setCitas] = useState([]);

  //citas del día actual
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/agendamientos/hoy")
      .then((response) => {
        setCitas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las citas del día:", error);
      });
  }, []);

  return (
    <div className="cronograma_diario_container">
      <h2>Cronograma Diario</h2>
      <ul>
        {citas.length > 0 ? (
          citas.map((cita, index) => (
            <li key={index}>
              <span>
                {new Date(cita.fechaHora).toLocaleTimeString("es-ES")}
              </span>{" "}
              - {cita.motivo}
            </li>
          ))
        ) : (
          <p>No hay citas para hoy.</p>
        )}
      </ul>

      <style jsx>{`
        .cronograma_diario_container {
          max-width: 500px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .cronograma_diario_container h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .cronograma_diario_container ul {
          list-style-type: none;
          padding: 0;
        }

        .cronograma_diario_container li {
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          background-color: #fff;
        }

        .cronograma_diario_container li span {
          font-weight: bold;
          color: #007bff;
        }
      `}</style>
    </div>
  );
}

export default CronogramaDiario;
