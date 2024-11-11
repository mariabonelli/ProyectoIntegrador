/* Quackendars */
import { useState } from "react";
import Calendar from "../../Components/Calendar/Calendar";
import axios from "axios";

function CrearCita() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [motivo, setMotivo] = useState("");
  const [estado, setEstado] = useState("");

  // cambio de fecha
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //nueva cita al backend
  const handleCreateCita = () => {
    const nuevaCita = {
      fechaHora: selectedDate,
      motivo,
      estado,
    };

    axios
      .post("http://localhost:8080/api/agendamientos", nuevaCita)
      .then((response) => {
        alert("Cita creada con éxito");
        console.log("Cita creada:", response.data);
      })
      .catch((error) => {
        console.error("Error al crear la cita:", error);
        alert("Hubo un problema al crear la cita.");
      });
  };

  return (
    <div className="crear_cita_funcionario_container">
      <Calendar data={[]} handleDeleteItem={() => {}} />

      <h2>Crear Nueva Cita</h2>
      <div className="formulario_cita">
        <label>
          Fecha seleccionada:
          <input
            type="text"
            value={selectedDate.toLocaleDateString("es-ES")}
            readOnly
          />
        </label>

        <label>
          Motivo de la cita:
          <input
            type="text"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder="Escribe el motivo"
          />
        </label>

        <label>
          Estado de la cita:
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            placeholder="Escribe el estado (Ej: Agendada)"
          />
        </label>

        <button onClick={handleCreateCita}>Agendar Cita</button>
      </div>

      <style jsx>{`
        .crear_cita_funcionario_container {
          max-width: 500px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .crear_cita_funcionario_container h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .formulario_cita label {
          display: block;
          margin: 10px 0 5px;
          font-weight: bold;
        }

        .formulario_cita input {
          width: 100%;
          padding: 8px;
          margin-bottom: 15px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .formulario_cita button {
          background-color: #007bff;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .formulario_cita button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default CrearCita;
