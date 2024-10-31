import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import List from "../List/List";
import ListItemTitle from "../List/ListItemTitle";
import Button from "../Button/Button";
import "./TimePickerStyle.css";

const horasDisponibles = [
  {
    id: 1,
    hora: "08:00:00",
    estado: "DISPONIBLE",
    horario: {
      id: 1,
      fecha: "2024-10-31",
      horaInicio: "08:00",
      horaFin: "17:00",
    },
  },
  {
    id: 2,
    hora: "09:00:00",
    estado: "DISPONIBLE",
    horario: {
      id: 1,
      fecha: "2024-10-29",
      horaInicio: "08:00",
      horaFin: "17:00",
    },
  },
];

function TimePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableHours, setAvailableHours] = useState([]);

  const handleDateOnChange = (date) => {
    setSelectedDate(date);
  };

  const handleHourSelected = (hour) => {
    console.log(hour);
  };

  useEffect(() => {
    // Formato de la fecha en "YYYY-MM-DD" usando hora local
    const selectDateFormatted = selectedDate.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const filteredHours = horasDisponibles.filter(
      (item) =>
        item.horario.fecha === selectDateFormatted &&
        item.estado === "DISPONIBLE"
    );

    setAvailableHours(filteredHours);
  }, [selectedDate]);

  console.log(availableHours);
  return (
    <div className="container_timepicker">
      <h3 className="timepicker_title">Fecha seleccionada</h3>
      <div className="content_timepicker">
        <div>
          <Calendar onchange={handleDateOnChange} value={selectedDate} />
        </div>
        {availableHours.map((hour) => (
          <List key={hour.id}>
            <ListItemTitle
              action={
                <Button
                  handleClick={() => handleHourSelected(hour.hora)}
                  variant="btn_small btn_tertiary"
                >
                  <small>Agendar hora</small>
                </Button>
              }
            >
              {hour.hora}
            </ListItemTitle>
          </List>
        ))}
      </div>
    </div>
  );
}

export default TimePicker;
